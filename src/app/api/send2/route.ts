import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { env } from "@/env.mjs";
import ReportEmail from '@/app/_components/report-email';

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const reqData = await req.json() as ReqData;
    try {
        const { data, error } = await resend.emails.send({
            from: 'PartnerConnect <contact@resend.dev>',
            to: "xanthan.ex@gmail.com",
            subject: 'Company Report' ,
            react: ReportEmail(reqData),
        });
        if (error) {
            console.log(error);
            return NextResponse.json({ error });
        }
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}
