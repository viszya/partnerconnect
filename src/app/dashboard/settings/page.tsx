import { SettingsForm } from "@/app/_components/form";

export default function Settings() {
    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                    Update your personal account settings
                </p>
            </div>
            <div className="flex flex-col justify-center w-full max-w-5xl ">
                <SettingsForm />
            </div>
        </div>
    );
}
