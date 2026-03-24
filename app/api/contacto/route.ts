import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import nodemailer from "nodemailer";

// Inicializar Firebase (client SDK, válido también en server-side)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, empresa, email, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }

    // 1. Guardar en Firestore
    await addDoc(collection(db, "contactos"), {
      nombre,
      empresa: empresa || "",
      email,
      mensaje,
      fechaEnvio: new Date().toISOString(),
    });

    // 2. Enviar email por SMTP de cPanel
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true para puerto 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Viagro Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Nuevo contacto de ${nombre}${empresa ? ` — ${empresa}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3a2a;">Nuevo mensaje de contacto — Viagro</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #4a4a4a; width: 120px;">Nombre</td>
              <td style="padding: 8px;">${nombre}</td>
            </tr>
            ${empresa ? `<tr>
              <td style="padding: 8px; font-weight: bold; color: #4a4a4a;">Empresa</td>
              <td style="padding: 8px;">${empresa}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #4a4a4a;">Email</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #4a4a4a; vertical-align: top;">Mensaje</td>
              <td style="padding: 8px; white-space: pre-wrap;">${mensaje}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e0d8cc; margin: 24px 0;" />
          <p style="color: #7c5c3b; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto de viagro.uk</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en API contacto:", error);
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}
