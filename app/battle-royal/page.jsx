import React from "react";

export default function BattleRoyalPage() {
  return (
    <main className="pt-28 sm:pt-36 pb-8 md:pt-40 lg:pt-48 2xl:pt-52 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-contain bg-no-repeat lg:bg-repeat">
      <section className="main-container">
        <div className="flex flex-col justify-center items-center">
          <h5 className="uppercase font-jost font-bold text-gradient text-lg sm:text-2xl md:text-3xl tracking-wider sm:mb-3 md:text-center">
            Battle Royale Update from August 2024-March 2025
          </h5>
          <p className="text-base text-[#f8f9fa] font-light md:font-medium my-3 pb-6 sm:pb-8 md:pb-10 md:text-center max-w-[850px]">
            Our Battle Royale mode is being developed by a separate team, and
            their latest progress report is available. After April, we’ll begin
            integrating the Battle Royale mode into the new core systems, a
            process that will only take a few weeks. Once this is complete,
            we’ll have a seamless experience across all game modes — and
            something truly special on our hands. <br />
            The foundation is strong. The speed is picking up. And from here on
            out — nothing can stop us
          </p>
        </div>

        {/* content start */}
        <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 mt-4 md:mt-6 xl:mt-8">
          {/* 1 */}
          <div className="flex flex-col gap-3 md:gap-5 xl:gap-6">
            <h6 className="uppercase font-jost font-bold text-gradient text-base md:text-lg xl:text-xl">
              April 2025
            </h6>

            <ul className="list-disc flex flex-col gap-1.5 md:gap-2 xl:gap-2.5">
              {listData?.april2025?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-500 w-full h-[1px]" />

          {/* 2 */}
          <div className="flex flex-col gap-3 md:gap-5 xl:gap-6">
            <h6 className="uppercase font-jost font-bold text-gradient text-base md:text-lg xl:text-xl">
              March 2025
            </h6>

            <ul className="list-disc flex flex-col gap-1.5 md:gap-2 xl:gap-2.5">
              {listData?.march2025?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-500 w-full h-[1px]" />

          {/* 3 */}
          <div className="flex flex-col gap-3 md:gap-5 xl:gap-6">
            <h6 className="uppercase font-jost font-bold text-gradient text-base md:text-lg xl:text-xl">
              February 2025
            </h6>

            <ul className="list-disc flex flex-col gap-1.5 md:gap-2 xl:gap-2.5">
              {listData?.february2025?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-500 w-full h-[1px]" />
          {/* 4 */}
          <div className="flex flex-col gap-3 md:gap-5 xl:gap-6">
            <h6 className="uppercase font-jost font-bold text-gradient text-base md:text-lg xl:text-xl">
              January 2025
            </h6>

            <ul className="list-disc flex flex-col gap-1.5 md:gap-2 xl:gap-2.5">
              {listData?.january2025?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-500 w-full h-[1px]" />
          {/* 5 */}
          <div className="flex flex-col gap-3 md:gap-5 xl:gap-6">
            <h6 className="uppercase font-jost font-bold text-gradient text-base md:text-lg xl:text-xl">
              December 2024
            </h6>

            <ul className="list-disc flex flex-col gap-1.5 md:gap-2 xl:gap-2.5">
              {listData?.december2024?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-500 w-full h-[1px]" />
          {/* 6 */}
          <div className="flex flex-col gap-3 md:gap-5 xl:gap-6">
            <h6 className="uppercase font-jost font-bold text-gradient text-base md:text-lg xl:text-xl">
              November 2024
            </h6>

            <ul className="list-disc flex flex-col gap-1.5 md:gap-2 xl:gap-2.5">
              {listData?.november2024?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-500 w-full h-[1px]" />

          {/* 7 */}
          <div className="flex flex-col gap-3 md:gap-5 xl:gap-6">
            <h6 className="uppercase font-jost font-bold text-gradient text-base md:text-lg xl:text-xl">
              October 2024
            </h6>

            <ul className="list-disc flex flex-col gap-1.5 md:gap-2 xl:gap-2.5">
              {listData?.october2024?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-500 w-full h-[1px]" />
          {/* 8 */}
          <div className="flex flex-col gap-3 md:gap-5 xl:gap-6">
            <h6 className="uppercase font-jost font-bold text-gradient text-base md:text-lg xl:text-xl">
              September 2024
            </h6>

            <ul className="list-disc flex flex-col gap-1.5 md:gap-2 xl:gap-2.5">
              {listData?.september2024?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-500 w-full h-[1px]" />

          {/* 9 */}
          <div className="flex flex-col gap-3 md:gap-5 xl:gap-6">
            <h6 className="uppercase font-jost font-bold text-gradient text-base md:text-lg xl:text-xl">
              August 2024
            </h6>

            <ul className="list-disc flex flex-col gap-1.5 md:gap-2 xl:gap-2.5">
              {listData?.august2024?.map((item, idx) => (
                <li key={idx} className="text-sm md:text-base xl:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

const listData = {
  august2024: [
    "2024-08-30: Update Engine",
    "2024-08-30: Updated binaries",
    "2024-08-29: Update Engine",
    "2024-08-29: Add binaries for engine",
    "2024-08-29: Add binaries",
    "2024-08-29: Add file for Unreal Engine source",
  ],
  september2024: [
    "2024-09-30: Updated binaries",
    "2024-09-30: Update content project",
    "2024-09-26: Add long path project",
    "2024-09-26: Update Project Inu UE5",
    "2024-09-26: Add part of Katana Inu 5.3",
    "2024-09-26: Update project",
  ],
  october2024: [
    "2024-10-31: Update World Partition (BattleRoyal2 → BattleRoyal2_WP)",
    "2024-10-30: Update MC_Group_Blockhouse",
    "2024-10-30: Update ping map",
    "2024-10-30: Update icon map",
    "2024-10-29: Update MC_Group_Block",
    "2024-10-29: Updated binaries",
    "2024-10-28: Update minimap icon for Battle Royale",
    "2024-10-28: Update teammate icon",
    "2024-10-28: Add MC_Group_Blockhouse",
    "2024-10-25: Updated binaries",
    "2024-10-25: Add new damage buff",
    "2024-10-24: Add KI_EnumList TreeBerry",
    "2024-10-24: Disable NVIDIA NIS",
    "2024-10-23: Updated binaries",
    "2024-10-23: Revert and fix Linux build",
    "2024-10-22: Test crash fix (skeleton)",
    "2024-10-21: Update version and character test level",
    "2024-10-18: Test version update 1235",
    "2024-10-17: Add new character test data asset",
    "2024-10-16: Fix matchmaking & party system",
    "2024-10-16: Updated binaries",
    "2024-10-15: Updated binaries",
    "2024-10-14: Attempt to fix matchmaking",
    "2024-10-14: Add Tree Apple",
    "2024-10-13: Fix Linux build & matchmaking debug",
    "2024-10-13: Cherry pick lighting/map fix",
    "2024-10-13: Cherry pick fix from 4.27",
    "2024-10-11: Update missing pack",
    "2024-10-11: Fix packaging failure",
    "2024-10-11: Disable Lumen for lobby",
    "2024-10-10: Updated binaries",
    "2024-10-06: Add Battle Royale map to project",
    "2024-10-06: Add more folders",
    "2024-10-06: Updated binaries",
    "2024-10-01: Cherry pick fix from 4.27",
  ],
  november2024: [
    "2024-11-29: Fix distance update issue",
    "2024-11-29: Updated binaries",
    "2024-11-29: Fix quest revive",
    "2024-11-29: Add logs for Agones & character customization fix",
    "2024-11-29: Fix customization & lobby check",
    "2024-11-29: Update version, add DGS log",
    "2024-11-29: Minor fixes",
    "2024-11-28: Update inventory init",
    "2024-11-28: Fix access none error",
    "2024-11-28: Update gamemode",
    "2024-11-28: Add 3D tree",
    "2024-11-28: Mini character update",
    "2024-11-28: Fix UI interaction bug",
    "2024-11-28: Fix toxic smoke",
    "2024-11-27: Fix weapon VFX",
    "2024-11-26: Add logs, map test, and various fixes",
    "2024-11-25: Add ns_oilpuddle & test update",
    "2024-11-22: Add EKI_Enum, fix ping icon size",
    "2024-11-21: Updated binaries",
    "2024-11-20–11-13: Multiple BR map, flow, shader, build & death zone updates",
    "2024-11-12: Fix automation tool & shader build",
    "2024-11-11: Temporary fixes for landscape",
    "2024-11-10: Updated binaries",
    "2024-11-09–11-08: Major HLOD, ping icon, and battle royal improvements",
    "2024-11-07–11-06: Added Ultra Dynamic Sky, new assets, and BR logic",
    "2024-11-05–11-01: Updates to inventory, radial wheel, icons, UI",
  ],
  december2024: [
    "2024-12-31: Add spawn screen, fix replication, update weapon UI",
    "2024-12-30: Multiple ship and UI updates, disabled FSR/DLSS to prevent editor crash",
    "2024-12-28–12-26: Added kite model, diving mechanics, berry trees, UI enhancements",
    "2024-12-25–12-24: Fix gliding, UI, tree functionality, loot points, and animation",
    "2024-12-23: Added animation notify and detail house block",
    "2024-12-20–12-19: Fixed crashes, added loot logic, improved death zone",
    "2024-12-18–12-16: Equipment HUD updates, gliding fixes, new healing system",
    "2024-12-15–12-14: Map and binary updates, added new trees, map layering",
    "2024-12-13–12-12: Matchmaking configuration, quest and build fixes",
    "2024-12-11–12-09: Inventory UI, binaries, golden chest feature",
  ],
  january2025: [
    "2025-01-25: Update plugin",
    "2025-01-25: Update version for 5.3.2 plugin",
    "2025-01-25: Add AI LLM",
    "2025-01-25: Fix Magic missing in source",
    "2025-01-25: Add dll fix compile",
    "2025-01-23: Update radial wheel stuck UI",
    "2025-01-23: Add notify UI",
    "2025-01-23: Update radial wheel",
    "2025-01-23: Updated binaries",
    "2025-01-23: Update UI notify",
    "2025-01-23: Fix warning",
    "2025-01-22: Update polish",
    "2025-01-22: Update UI death zone notification",
    "2025-01-21: Add Death zone UI shrinking again",
    "2025-01-21: Update Gym Map",
    "2025-01-21: Animation fix",
    "2025-01-21: Delete unused asset",
    "2025-01-20: Fix radial wheel hang",
    "2025-01-20: Update Flow Local DGS",
    "2025-01-20: Fix when ping then destroy actor",
    "2025-01-20: Fix outline location name",
    "2025-01-20: Delete Interact",
    "2025-01-20: Fix error sometimes can't run if press F",
    "2025-01-17: Fix warning",
    "2025-01-17: Update BRGamemode",
    "2025-01-17: Update Build flow editor",
    "2025-01-17: Update Fake Value Scoreboard",
    "2025-01-17: Update spawn screen",
    "2025-01-17: Add OutLight",
    "2025-01-17: Update Match Result",
    "2025-01-16: New HLOD",
    "2025-01-16: Fix berries",
    "2025-01-16: Fix tree begin play",
    "2025-01-16: Fix durability on drop item",
    "2025-01-16: Delete HLOD",
    "2025-01-16: Fix warning",
    "2025-01-16: Update config HLOD",
    "2025-01-16: Fix update inner and outer slot UI",
    "2025-01-16: Fix warning editor",
    "2025-01-16: Update HLOD",
    "2025-01-15: Fix jump and compile error",
    "2025-01-15: Update version 5307",
    "2025-01-15: Fix quick loot weapon",
    "2025-01-15: Delete HLOD",
    "2025-01-15: Fix button UI",
    "2025-01-15: Update map",
    "2025-01-15: Update map HLOD setting",
    "2025-01-15: Update map",
    "2025-01-14: Fix movement fly",
    "2025-01-14: Update location name",
    "2025-01-14: Fix movement fly",
    "2025-01-14: Fix VFX chest",
    "2025-01-14: Update VFX drop item",
    "2025-01-13: Update sound",
    "2025-01-13: Update AC_Interactable",
    "2025-01-13: Update soul altars",
    "2025-01-13: Update glowing berry",
    "2025-01-13: New gliding replicate",
    "2025-01-13: Diving new logic",
    "2025-01-13: Update inventory quick loot item, weapon",
    "2025-01-13: Update VFX item drop",
    "2025-01-11: Update sound when ping",
    "2025-01-11: Add update radar chart",
    "2025-01-11: Add sound when ping for teammate",
    "2025-01-11: Add FX when drop item in loot point",
    "2025-01-11: Add Is Valid Line Trace For Camera",
    "2025-01-10: Add background overlay for inventory UI",
    "2025-01-10: Update Choose Zone Spawn Ship",
    "2025-01-10: Add Chest Outline",
    "2025-01-10: Outline Weapon",
    "2025-01-10: Updated binaries",
    "2025-01-09: Add list interact",
    "2025-01-09: Add tree without fruits mesh",
    "2025-01-09: Fix weapon kit not consumable",
    "2025-01-09: Fix pan map",
    "2025-01-09: Fix glowing berry",
    "2025-01-09: Fix top notification when consuming herb",
    "2025-01-08: Update character",
    "2025-01-08: Fix weapon slot UI not updating",
    "2025-01-08: Update flow",
    "2025-01-08: Fix weapon tray durability UI",
    "2025-01-08: Update minimap and map",
    "2025-01-08: Update zoom in location mouse",
    "2025-01-07: Weapon tray fix",
    "2025-01-06: Fix loi nha trong thanh",
    "2025-01-06: Fix weapon UI",
    "2025-01-06: Fix status",
    "2025-01-06: Fix status",
    "2025-01-06: Fix status",
    "2025-01-06: Fix status",
    "2025-01-06: Update icon minimap",
    "2025-01-06: Fix status",
    "2025-01-06: Fix status",
    "2025-01-06: Updated NS_ShipDisappear",
    "2025-01-06: Updated ns_shipdisappear",
    "2025-01-06: Fix status",
    "2025-01-04: Add VFX Ship",
    "2025-01-04: Finish adding herbs",
    "2025-01-04: Fix herb I",
    "2025-01-04: Add get inventory UI interface",
    "2025-01-04: Fix location teammate minimap",
    "2025-01-04: Fix consume weapon kit not updating UI",
    "2025-01-04: Missing interface updates",
    "2025-01-04: Fix UI weapon",
    "2025-01-04: Fix UI FlipFlop hidden",
    "2025-01-03: Fix ABP_CoreCharacter",
    "2025-01-03: BlockingVolume VFX add",
    "2025-01-03: Add glowing berry and weapon kit icons",
    "2025-01-03: Updated binaries",
    "2025-01-03: Fix bug AutoAttack server",
    "2025-01-03: Add herb and armor kit",
    "2025-01-03: Add Block Task with Diving",
    "2025-01-03: New setup for drag map",
    "2025-01-03: Update big map when no death zone",
    "2025-01-03: Change image big map and update minimap when no death zone",
    "2025-01-03: Add GA Herb buff",
    "2025-01-02: Fix UI not updated at begin play",
    "2025-01-02: Add data assets for berries",
    "2025-01-02: Add data assets for weapon kits",
    "2025-01-02: Add Weapon Begin",
    "2025-01-02: Add Blocking Volume",
  ],
  february2025: [
    "2025-02-22: Update detail capital map",
    "2025-02-21: Fix Anim BP for Polygon AI LLM",
    "2025-02-20: Add detail capital right side",
    "2025-02-19: Fix layout capital",
    "2025-02-17: Update location name",
    "2025-02-16: Finish fix lighting without Lumen",
    "2025-02-16: Fix layout capital",
    "2025-02-15: Update data asset",
    "2025-02-15: Update texture",
    "2025-02-15: Update model and ABP",
    "2025-02-15: Update new character",
    "2025-02-15: Fix compile AI plugin",
    "2025-02-15: Update Anim BP",
    "2025-02-15: Update version 531239",
    "2025-02-15: Update missing material",
    "2025-02-14: Update lighting",
    "2025-02-14: Fix HP UI not updating when picking up Jade",
    "2025-02-14: Fix when Jade equip or unequip play heal/damaged on HUD",
    "2025-02-14: Fix jade pickup slot",
    "2025-02-14: Fix layout capital",
    "2025-02-14: Update lighting",
    "2025-02-14: Fix UI",
    "2025-02-14: Complete fix lighting",
    "2025-02-14: Continue fix lighting",
    "2025-02-13: Updated binaries",
    "2025-02-12: Fix drop jade",
    "2025-02-12: Clean and fix layout capital",
    "2025-02-12: Add jade to drop from loot chest",
    "2025-02-12: Base crafting update",
    "2025-02-12: Inventory slot update",
    "2025-02-12: Inventory interface update",
    "2025-02-12: Loot slot update",
    "2025-02-11: Add again update SDK Conv_AI",
    "2025-02-11: Update project",
    "2025-02-11: Temp delete Conv-AI plugin",
    "2025-02-11: Fix model Assian Temple in lobby",
    "2025-02-11: Create GA for health charm and add detail to health charm DA",
    "2025-02-11: Fix charm on pickup got duplicated",
    "2025-02-11: Fix charm not hoverable",
    "2025-02-10: Fix enum error",
    "2025-02-10: Fix missing file",
    "2025-02-10: Add jade to slot",
    "2025-02-10: Update light",
    "2025-02-07: New lighting",
    "2025-02-07: Fix flow and shader",
    "2025-02-03: Update sample AI LLM",
  ],
  march2025: [
    "2025-03-30: Fix bug",
    "2025-03-30: Update all Anim BP for AI NPC",
    "2025-03-26: Updated binaries",
    "2025-03-22: Update plugin",
    "2025-03-22: Update avalanche",
    "2025-03-22: Big update AI anim and character",
    "2025-03-20: Update minimap rule",
    "2025-03-17: Updated binaries",
    "2025-03-16: Update detail map",
    "2025-03-13: Add more dance anim",
    "2025-03-12: Update anim dance",
    "2025-03-05: Update Anim BP",
    "2025-03-03: Updated binaries",
    "2025-03-03: Update context for AI and polish more anim for character",
    "2025-03-03: Update map capital",
    "2025-03-03: Update anim for AI",
  ],
  april2025: [
    "2025-04-04: Disable Nanite all static mesh",
    "2025-04-02: Update map HLOD",
    "2025-04-02: Update position",
    "2025-04-02: Update Anim BP",
    "2025-04-02: Delete old HLOD",
    "2025-04-02: New HLOD 04/2025",
  ],
};
