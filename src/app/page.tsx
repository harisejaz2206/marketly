import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className=" py-20 mx-auto text-center flex flex-col items-center max-3xl">
        <h1>
          Your marketplace for high quality {''}
          <span className="text-blue-600">Digital Assets</span>
        </h1></div>
    </MaxWidthWrapper>
  );
}
