import { useState } from "react";
import { api } from "@/trpc/react";
import { Icons } from "@/app/_components/icons";
import { buttonVariants } from "@/app/_components/ui/button";
import { cn, formatDate } from "@/server/utils";
import { Input } from "@/app/_components/ui/input";
import { useToast } from "@/app/_components/ui/use-toast";

interface FormProps {
  onNextClick: () => void;
}

export function Form1({ onNextClick }: FormProps) {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [status, setStatus] = useState("");
  const [typeOfOrganization, setTypeOfOrganization] = useState("");
  const [image, setimage] = useState("");
  const [industryOrSector, setIndustryOrSector] = useState("");
  const [sizeEmployees, setSizeEmployees] = useState("");
  const [historyBackground, setHistoryBackground] = useState("");
  const [missionStatementVision, setMissionStatementVision] = useState("");
  const [targetMarketCustomerBase, setTargetMarketCustomerBase] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [partner, setPartner] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const addCompany = api.company.addCompany.useMutation({
    onSuccess: () => {
      setIsLoading(false);
      toast({
        title: "Success (Click the next button to continue)",
        description: "Company profile created at " + formatDate(Date()),
      });
    },
  });

  function onSubmit() {

    setIsLoading(true);
    setSubmitted(true);
    // createCompany.mutate({
    //   companyName,
    //   image,
    //   status,
    //   typeOfOrganization,
    //   industryOrSector,
    //   sizeEmployees,
    //   historyBackground,
    //   missionStatementVision,
    //   targetMarketCustomerBase,
    //   partner,
    // });
    setIsLoading(false);
    toast({
      title: "Success (Click the next button to continue)",
      description: "Company profile created at " + formatDate(Date()),
    });
  }

  return (
    <section>
      <div className="mt-5 flex flex-col rounded-xl border border-secondary bg-background p-5">
        <div className="flex flex-col justify-center text-center md:flex-row md:text-left">
          <div className="flex w-full max-w-5xl flex-col justify-center  space-y-12">
            <article>
              <span className="inline-flex items-center rounded-xl text-primary">
                <span className="font-mono text-sm" aria-hidden="true">
                  01
                </span>
              </span>
              <div className="mt-3 text-3xl tracking-tighter text-primary">
                Welcome! Let&apos;s get started.
              </div>
              <div className="mt-4 text-primary/80">
                Let&apos;s get started! Please fill out the following form to
                the best of your ability. All this information will be used to
                create your profile. You can always edit your profile later.
              </div>
            </article>
            <form
              className="flex flex-col gap-y-9"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  Company Name
                </label>
                <Input
                  placeholder="My Company"
                  className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                  type="text"
                  value={companyName}
                  required
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  Status
                </label>
                <Input
                  placeholder="Active"
                  className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                  type="text"
                  value={status}
                  required
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  Logo
                </label>
                <Input
                  placeholder="https://example.com/logo.png"
                  className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                  type="url"
                  value={image}
                  required
                  onChange={(e) => setimage(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  Type of Organization
                </label>
                <Input
                  placeholder="For-Profit"
                  className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                  type="text"
                  value={typeOfOrganization}
                  required
                  onChange={(e) => setTypeOfOrganization(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  Industry or Sector
                </label>
                <Input
                  placeholder="IT"
                  className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                  type="text"
                  value={industryOrSector}
                  required
                  onChange={(e) => setIndustryOrSector(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  Size of Employees
                </label>
                <Input
                  placeholder="5000"
                  className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                  type="number"
                  value={sizeEmployees}
                  required
                  onChange={(e) => setSizeEmployees(e.target.value)}
                />

              </div>
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  History Background
                </label>
                <Input
                  placeholder="Founded in 2010, Innovate Tech has been a pioneer in delivering cutting-edge technology solutions."
                  className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                  type="text"
                  value={historyBackground}
                  required
                  onChange={(e) => setHistoryBackground(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  Mission Statement/Vision
                </label>
                <Input
                  placeholder="Empowering businesses through innovative technology solutions"
                  className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                  type="text"
                  value={missionStatementVision}
                  required
                  onChange={(e) => setMissionStatementVision(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  Target Market/Customer Base
                </label>
                <Input
                  placeholder="Enterprise, Startups"
                  className="rounded-xl border-primary/20 px-6 py-3 placeholder:text-primary/40"
                  type="text"
                  value={targetMarketCustomerBase}
                  required
                  onChange={(e) => setTargetMarketCustomerBase(e.target.value)}
                />
              </div>
              <div className="col-span-full">
                <label className="mb-3 block text-sm font-medium text-primary/90">
                  Is this company a business partner your organization engages
                  with?
                  <br />
                  <em className="text-primary/80">
                    Leave Un-Checked if they are not a partner{" "}
                  </em>
                </label>
                <input
                  className="mr-2 rounded-xl border-primary/20 placeholder:text-primary/40"
                  type="checkbox"
                  checked={partner}
                  onChange={() => setPartner(!partner)}
                />
                <span className="text-sm text-primary/80">
                  Yes, this company is a partner
                </span>
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "inline-flex w-full items-center justify-center rounded-xl border-2 border-primary bg-primary px-6 py-2.5 text-center text-sm text-secondary duration-200 hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus-visible:outline-primary focus-visible:ring-primary",
                  )}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <></>
                  )}{" "}
                  Create Company
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {submitted ? (
        <div className="flex items-center justify-center">
          <div className="mt-2 flex items-center justify-center rounded-xl border border-dashed border-primary/60 p-2">
            {/* Next Button */}
            <button
              onClick={onNextClick}
              className={cn(
                buttonVariants({ variant: "default" }),
                " w-26 rounded-xl",
              )}
            >
              Next
              <Icons.chevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
