import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      


      <section className="remove-scroller container my-auto">
        <div className="sub-container max-w-[496px] ">
          <Image
          src="/assets/icons/logo.png" 
          height={200}
          width={200}
          alt="logo"
          className="mb-4 h-13 w-fit "
          />

          <PatientForm/>

          <div className="text-14-regular mt-10 flex justify-between">
            <p className="justify-items-end text-dark-600 xltext-left">
            © 2024 WellNext
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
      src="/assets/images/onboarding-img.png"
      height={1000}
      width={1000}
      alt="patient"
      className="size-img max-w-[50%]"
      />
    </div>
  );
}
