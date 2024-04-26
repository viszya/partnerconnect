import { SettingsForm } from "@/app/_components/form";
import { InputData } from "@/app/_components/inputdata3";

export default function Settings() {
  return (
    <div className="flex flex-col px-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Update your personal account settings
        </p>
      </div>
      <div className="flex w-full max-w-5xl flex-col justify-center ">
        <SettingsForm />
      </div>

    </div>
  );
}
