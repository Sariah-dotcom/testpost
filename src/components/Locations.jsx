import React from "react";
import Accordion from "./Accordion";

export default function Locations() {
  return (
    <section className="flex justify-center ">
      <div className="px-5 md:px-10 lg:px-0 lg:w-[70%] flex flex-col gap-5 lg:flex-row lg:items-center">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <h2 className="section-heading mb-10 text-4xl md:text-5xl lg:text-6xl text-center lg:text-left">
            Multiple Locations <br />{" "}
            <span className="italic">Island-wide</span>
          </h2>
          <p className="text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta
            magnam odio voluptatum accusamus tenetur dignissimos.
          </p>

          <div className="flex flex-col gap-8 py-5 lg:w-[70%] lg:gap-12 lg:mt-20">
            <Accordion
              heading="Windward"
              content={
                <ul>
                  <li>Calliaqua Post Office</li>
                  <li>Mesopotamia Post Office</li>
                  <li>Georgetown Revenue Office</li>
                </ul>
              }
            />

            <Accordion
              heading="Leeward"
              content={
                <ul>
                  <li>Layou Post Office</li>
                  <li>Barrouallie Revenue Office</li>
                  <li>Chateaubelair Post Office</li>
                </ul>
              }
            />

            <Accordion
              heading="Grenadines"
              content={
                <ul>
                  <li>Bequia Revenue Office</li>
                  <li>Union Island Revenue Office</li>
                </ul>
              }
            />
          </div>
        </div>

        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img className="lg:h-[35rem] h-[20rem]" src="\map.png" alt="map" />
        </div>
      </div>
    </section>
  );
}
