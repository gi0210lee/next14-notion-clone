import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:h-[300px] md:w-[300px]">
          <Image
            src="/documents.png"
            fill
            className="dark:hidden object-contain"
            alt="Documents"
          />
          <Image
            src="/documents-dark.png"
            fill
            className="hidden dark:block object-contain"
            alt="Documents"
          />
        </div>
        <div className="relative w-[300px] h-[300px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            className="dark:hidden object-contain"
            alt="reading"
          />
          <Image
            src="/reading-dark.png"
            fill
            className="hidden dark:block object-contain"
            alt="reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
