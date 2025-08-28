import Link from "next/link";
import React from "react";

export default function GameReportPage() {
  return (
    <main className="pt-28 sm:pt-36 pb-8 md:pt-40 lg:pt-48 2xl:pt-52 md:pb-20 bg-[url('/assets/images/team_bg.webp')] bg-contain bg-no-repeat lg:bg-repeat">
      <section className="main-container">
        <h5 className="uppercase font-jost font-bold text-gradient text-lg sm:text-2xl md:text-3xl tracking-wider sm:pb-3 md:text-center">
          Game Report: August 2024 – April 2025
        </h5>

        {/* important notice */}
        <ImportantNotice />

        {/* progress report */}
        <GameDevelopmentProgressReport />
      </section>
    </main>
  );
}

const ImportantNotice = () => {
  return (
    <div className="my-4 sm:my-5 md:my-7 lg:my-9 xl:py-11 2xl:py-10 font-poppins flex flex-col gap-3 md:gap-5 lg:gap-7 xl:gap-8">
      <h3 className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-jost font-bold">
        Important Notice:
      </h3>

      <div className="flex flex-col gap-2.5 md:gap-3 xl:gap-4 2xl:gap-5">
        <p className="text-[#f5a238] font-medium text-sm md:text-base xl:text-lg">
          Development Update – April 2025
        </p>

        <p className="text-xs md:text-sm xl:text-base text-white">
          Over the past six months, we’ve been fully focused on rebuilding our
          core systems and transitioning from Unreal Engine 4 to Unreal Engine
          5. This was a major technical shift that required reworking much of
          our backend infrastructure — a move that not only fixes scalability
          issues but also significantly reduces server costs and ensures
          long-term stability.
        </p>

        <p className="text-xs md:text-sm xl:text-base text-white">
          Additionally, we’ve improved the gameplay and added many new features
          to make the experience smoother and more enjoyable. We’ve also removed
          hardcoded elements from the source code, making everything more
          flexible and scalable. Overall, everything is progressing positively
          and running smoothly.
        </p>

        <p className="text-xs md:text-sm xl:text-base text-white">
          While this slowed down visible progress, it was a necessary investment
          for the future. The good news: that phase is now complete as of March
          2025. From here on, we’re shifting gears — focusing entirely on
          improvements, new features, abilities, and polishing the player
          experience.
        </p>

        <p className="text-xs md:text-sm xl:text-base text-white">
          With our new foundation in place, development has already accelerated.
          We&apos;re now able to deliver updates and features at nearly double
          the speed compared to before. Some major additions include:
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base text-white">
            A full XP and player progression system
          </li>
          <li className="text-xs md:text-sm xl:text-base text-white">
            Class-based characters with unique mechanics
          </li>
          <li className="text-xs md:text-sm xl:text-base text-white">
            A wide range of backend upgrades built completely from scratch
          </li>
          <li className="text-xs md:text-sm xl:text-base text-white">
            Core gameplay improvements, including better cooldowns, kill
            systems, and responsiveness
          </li>
        </ul>

        <p className="text-xs md:text-sm xl:text-base text-white">
          None of these updates have been shown publicly — yet. But we’re
          getting close.
        </p>

        <p className="text-xs md:text-sm xl:text-base text-white">
          On the technical side, we&apos;ve dramatically improved performance
          and visuals. The game now runs at higher quality and higher FPS, and
          server costs have been slashed by over 3x. These backend and gameplay
          upgrades are already making a noticeable impact.
        </p>

        <p className="text-xs md:text-sm xl:text-base text-white">
          The <span className="font-bold text-[#f5a238]">Open Beta</span> is
          nearly ready. We&apos;ve been holding back our big trailer until we
          can align it with the right market timing — but it’s coming. Here some
          updates:
        </p>

        <p className="text-[#f5a238] font-medium text-sm md:text-base xl:text-lg mt-1 md:mt-1.5 lg:mt-2 xl:mt-2.5">
          Battle Royale Update
        </p>

        <p className="text-xs md:text-sm xl:text-base text-white">
          Our Battle Royale mode is being developed by a separate team, and
          their latest progress report is available. After April, we’ll begin
          integrating the Battle Royale mode into the new core systems, a
          process that will only take a few weeks. Once this is complete, we’ll
          have a seamless experience across all game modes — and something truly
          special on our hands.
        </p>

        {/* TODO: Add NEXT REPORT URL */}
        <p className="text-xs md:text-sm xl:text-base text-white">
          The foundation is strong. The speed is picking up. And from here on
          out — nothing can stop us.{" "}
          <Link
            href="/battle-royal"
            className="text-[#f5a238] underline hover:no-underline text-base md:text-lg xl:text-xl 2xl:text-2xl"
          >
            Battle royal report.
          </Link>
        </p>
      </div>
    </div>
  );
};

const GameDevelopmentProgressReport = () => {
  return (
    <div className="my-4 sm:my-5 md:my-7 lg:my-9 xl:py-11 2xl:py-10 flex flex-col  gap-3 md:gap-5 lg:gap-7 xl:gap-8">
      {/* header */}
      <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
        <h6 className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-[#f5a238]">
          Game Development Progress Report
        </h6>
        <p className="text-white text-xs md:text-sm xl:text-base">
          Period: August 2024 – March 2025
        </p>
      </div>
      {/* content */}
      <GameplayAndCombat />

      <SoundDesignAndAudioEng />

      <TechnicalDevelopment />

      <Qa />

      <GameDesign />

      <AdditionalInfo />

      <Summary />

      <p className="text-xs md:text-sm xl:text-base text-white">
        Here are more details if you want to read precisely.
      </p>

      <p className="text-xs md:text-sm xl:text-base text-csYellow">
        Gameplay and Combat (Visible for the Player)
      </p>

      <ul className="list-disc flex flex-col gap-3 md:gap-4 xl:gap-5">
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Redesigned Damage System:</span>
          <br />A complete overhaul of the damage system has been implemented.
          Players can now play around with Base and Bonus damage to create their
          desired playstyle. For instance, some players may focus on burst
          damage for quick, impactful attacks, while others may prefer to build
          toward damage per minute (DPM), allowing for consistent damage output
          over time. The system was built to be highly scalable, allowing for
          more fine-tuned control over damage calculation. Damage is now
          calculated via custom magnitude calculations, which are based on the
          attributes of both base and bonus damage, ensuring more precise and
          reliable damage calculations. This change will allow for much greater
          replayability, enabling players to experiment with different
          approaches in combat and keep gameplay fresh and dynamic.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">
            Damage to Stamina Concept and Mechanics:
          </span>
          <br />
          As part of the new combat system, damage to stamina has been
          introduced as a core mechanic. Certain abilities, including Poison and
          some others, now deal a percentage of damage as stamina damage. This
          provides additional tactical opportunities in combat, as players can
          use these abilities to slow down their opponents without directly
          reducing their movement speed. This mechanic introduces a layer of
          strategy by forcing players to consider how to balance stamina
          management with health, adding more depth to the gameplay and
          encouraging players to think carefully about their moves.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">
            Damage Over Time (DoT) Effects – Bleeding, Burning, and Poisoning:
          </span>
          <br />
          The introduction of DoT effects such as Bleeding, Burning, and
          Poisoning adds new layers of tactical depth. These effects deal
          consistent damage over time, forcing players to think about sustained
          damage as well as burst damage. Poisoning, specifically, also adds a
          unique twist by dealing a small amount of damage to stamina alongside
          health, forcing players to balance their resources and deal with
          multiple types of damage simultaneously. DoT effects offer interesting
          gameplay opportunities, such as forcing players to manage their health
          and stamina while being affected by persistent damage from various
          sources.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Stagger Mechanic:</span>
          <br />A new stagger mechanic has been carefully introduced for certain
          abilities. This mechanic adds a new element to combat by allowing
          certain attacks to stagger opponents, briefly interrupting their
          actions and leaving them vulnerable to follow-up attacks. The stagger
          mechanic is implemented with great care to maintain a sense of fluid
          movement while still offering a chance to control opponents in certain
          situations. This provides players with more tactical options, whether
          they’re looking to gain an edge by disrupting their opponent’s flow or
          capitalize on an opening for a combo attack.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">
            Character Class Attribute System:
          </span>
          <br />A significant update has been made to the character class
          system. Unique attributes such as health, stamina, base damage, and
          bonus damage are now specific to each character class. This gives each
          class a distinct playstyle and ensures that different characters feel
          unique in their strengths and weaknesses. In the future, passive
          abilities will be introduced for each class, further enhancing their
          individual identity and providing players with a more tailored
          experience when choosing characters.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">
            Melee Attacks System & Interactivity:
          </span>
          <br />
          The melee combat system has been significantly expanded. Melee attacks
          now come in two distinct forms: combination attacks and attacks that
          can be performed while moving. This opens up new strategic
          possibilities, allowing players to adapt their combat style to
          different situations. Additionally, destructible objects can now be
          damaged by melee attacks, allowing for greater interactivity with the
          environment. This not only makes the combat feel more dynamic and
          satisfying but also introduces new opportunities for environmental
          strategy, encouraging players to think about how they use their
          surroundings during a fight.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Ability Redesign:</span>
          <br />A major effort has gone into the redesign of all existing
          abilities to ensure they feel more impactful and satisfying. Each
          ability has been reworked to provide more tangible feedback when used,
          so players can feel the effects of their actions more clearly.
          Alongside the redesign of old abilities, four new abilities have been
          created. The system for adding new abilities is now streamlined,
          making it easy to create new abilities with minimal effort in terms of
          technical work. The key elements for adding new abilities are VFX,
          animations, and sounds, but the programming behind them can be
          accomplished in a very short timeframe, meaning new abilities can be
          integrated quickly and efficiently.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Camera System & Spectator Mode:</span>
          <br />A camera system has been created to allow for camera shakes, FOV
          changes, and changes to the viewpoint during specific abilities like
          aiming abilities and others. This system enhances the overall combat
          experience by making the camera more reactive to player actions,
          increasing the immersion. Additionally, spectator mode has been
          implemented, allowing players to watch ongoing matches and better
          understand the flow of combat, offering more opportunities for both
          engagement and learning.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Damage Reaction System:</span>
          <br />A damage reaction system has been added to provide more visual
          feedback when characters take damage. Now, the impact of damage is
          more visibly clear, helping to immerse players into the experience and
          make combat feel more reactive and impactful. This system ensures that
          damage is not only a gameplay mechanic but also an important visual
          cue, so players can clearly understand when they have successfully
          landed an attack.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Custom Lobbies:</span>
          <br />
          The ability to create custom lobbies has been introduced, enabling
          players to set up their own matches with specific parameters, such as
          character selection, maps, and match settings. This feature offers
          greater flexibility and customization for multiplayer gameplay,
          allowing for more varied and personal experiences.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Progression System:</span>
          <br />
          The first version of the player progression system has been
          implemented. This system allows players to earn in-game currency and
          experience points after each match, which can be used to unlock new
          characters and weapons. The introduction of this progression system
          provides players with a sense of reward and a tangible sense of
          progression, making matches feel more meaningful and giving players
          goals to work toward over time.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">UI/UX Improvements:</span>
          <br />
          Many improvements have been made to the HUD and user experience in
          general. This includes the addition of debuffs, improved health change
          animations, and a more refined damage display. These changes help make
          combat feel more fluid, intuitive, and visually engaging, allowing
          players to better track their status and make more informed decisions
          during gameplay.
        </li>
      </ul>

      {/* //////////////////////////////////////////////// */}

      <p className="text-xs md:text-sm xl:text-base text-csYellow">
        Sound Design and Engineering
      </p>

      <ul className="list-disc flex flex-col gap-3 md:gap-4 xl:gap-5">
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">FMOD Integration:</span>
          <br />
          The FMOD audio system has been successfully integrated into the latest
          UE version. This allows for advanced audio control, enhancing the
          overall sound design of the game. The migration to FMOD ensures that
          future sound design can be easily expanded and customized.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">UI & Combat Loop Sounds:</span>
          <br />
          All UI sounds have been fixed and implemented, improving the player’s
          interaction with menus and HUD elements. Additionally, the combat loop
          sounds have been implemented, providing immersive feedback during
          rounds and matches, as well as combat events like attacking and
          blocking.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Character and Abilities Sounds:</span>
          <br />
          All character sounds have been fine-tuned, including death sounds,
          footsteps, jumps, and rolls. Additionally, the sounds for various
          abilities have been fixed and new ones added to ensure they match the
          intended impact and feedback.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">New Music:</span>
          <br />A new batch of original music tracks has been created for the
          main menu, with four unique OSTs now in place, helping to set the tone
          and atmosphere for the game.
        </li>
      </ul>

      {/* //////////////////////////////////////////////// */}

      <p className="text-xs md:text-sm xl:text-base text-csYellow">
        Technical (Invisible for the Player)
      </p>

      <ul className="list-disc flex flex-col gap-3 md:gap-4 xl:gap-5">
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Game Mode Redesign:</span>
          <br />
          All game modes have been redesigned to ensure they work efficiently
          and can be easily expanded in the future. The new system allows for
          easy scalability, meaning that new modes can be implemented quickly
          and without significant technical debt.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Save System Implementation:</span>
          <br />A comprehensive save system has been added to ensure that player
          progress is tracked and saved correctly, with support for future
          expansion
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Enhanced Input System:</span>
          <br />A completely new input system has been designed based on the
          Enhanced Input System in Unreal Engine. This new system gives
          designers far more flexibility and control, enabling the ability to
          change abilities in real-time based on inputs, which is crucial for
          future systems like the Deck system.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Ability Base Systems:</span>
          <br />
          New ability bases for various types of abilities (area abilities,
          self-buff abilities, charging abilities) have been created, making it
          easier to implement new abilities with minimal programming work. These
          bases provide a template that only requires VFX, animations, and sound
          effects for full implementation, drastically reducing the time and
          effort needed for new abilities.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Backend & Infrastructure:</span>
          <br />A new backend has been developed to handle accounts,
          matchmaking, progression, and other critical game systems.
          Additionally, a game launcher and patching system have been created,
          enabling easy updates and patches to be deployed.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Migration to Unreal Engine 5:</span>
          <br />
          The project was successfully migrated from Unreal Engine 4.27 to
          Unreal Engine 5.3, including all maps, animations, VFX, and other game
          assets. This migration has brought significant improvements in
          performance and scalability.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Optimization and Refactoring:</span>
          <br />
          Following the migration, a thorough optimization process was carried
          out, including code refactoring, scene optimizations, and the
          migration from Blueprints to C++ for greater performance.
        </li>
      </ul>

      {/* //////////////////////////////////////////////// */}

      <p className="text-xs md:text-sm xl:text-base text-csYellow">QA</p>

      <ul className="list-disc flex flex-col gap-3 md:gap-4 xl:gap-5">
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Testing Systems:</span>
          <br />A series of testing levels have been created for various
          elements, including animations, VFX, and UI elements. These levels
          allow for efficient and focused testing of individual systems.
          Additionally, data asset validators have been put in place to ensure
          that all assets are correctly implemented and validated.
        </li>
        <li className="text-xs md:text-sm xl:text-base">
          <span className="font-semibold">Unreal Insights Setup:</span>
          <br />
          Unreal Insights has been set up to provide performance tracking and
          debugging tools for continuous optimization and issue resolution.
        </li>
      </ul>
    </div>
  );
};

const GameplayAndCombat = () => {
  return (
    <>
      <h3 className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-jost font-bold">
        🕹 Gameplay & Combat (Player-Visible)
      </h3>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 mt-2 md:mt-3 xl:mt-4">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Advanced Damage System
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Introduced new Base and Bonus Damage mechanics to promote different
            playstyles—burst vs DPM (damage per minute).
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Fully refactored to use custom magnitude calculations for efficiency
            and reliability.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            <span className="font-semibold text-[#f5a238]">
              Damage to Stamina
            </span>{" "}
            system added – certain damage types now drain stamina, enabling
            tactical slowdowns.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Status Effects (DoTs)
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Introduced Bleeding, Burning, and Poisoning mechanics.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            DoTs can stack; Poison also affects stamina.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Combat Feel Enhancements
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Added stagger mechanics for specific abilities—carefully balanced to
            preserve freedom of movement while adding tactical control.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Developed a responsive damage reaction system, now visually and
            audibly reflects hits.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Implemented OnDeath visuals and sound effects for a more satisfying
            elimination experience.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Melee Combat
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Delivered 2 versions: attack combinations and attacks while moving.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Melee attacks now interact with destructible objects.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Built flexible melee system to easily support future combat content.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Abilities Overhaul
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            <span className="font-semibold text-[#f5a238]">
              Redesigned all old abilities
            </span>{" "}
            for satisfaction and impact.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Redesigned all old abilities
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Created and implemented 4 new abilities, thanks to new scalable
            ability base systems (e.g., Aim, Area, Self Buff, Charging).
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Programming time for new abilities has been drastically reduced
            (10–25 min), leaving only VFX/SFX/animations.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Character System
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Unique attribute sets for each character class (health, stamina,
            base, bonus damage).
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Future passive abilities planned.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Player Control & Visual Systems
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Introduced custom{" "}
            <span className="font-semibold text-[#f5a238]">camera system</span>{" "}
            (camera shakes, FOV changes, ability-specific views).
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Fully implemented{" "}
            <span className="font-semibold text-[#f5a238]">spectator mode</span>
            .
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Added{" "}
            <span className="font-semibold text-[#f5a238]">
              character rotation & preview system
            </span>{" "}
            in main menu.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Enhanced <span className="font-semibold text-[#f5a238]">HUD:</span>{" "}
            health animations, damage indicators, debuffs, team indicators.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Progression & User Interface
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            First version of{" "}
            <span className="font-semibold text-[#f5a238]">
              in-game progression system:
            </span>{" "}
            XP, currency, unlocks.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Created UI for{" "}
            <span className="font-semibold text-[#f5a238]">
              profile, rewards, wallet
            </span>
            .
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Implemented{" "}
            <span className="font-semibold text-[#f5a238]">
              purchase system
            </span>{" "}
            for characters & weapon classes.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Redesigned core HUD and UI for improved UX.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Pickups & Objectives
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Created pickup system and introduced gameplay-affecting pickups to
            drive map control.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 mb-2 md:mb-3 xl:mb-4">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Custom Lobbies
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Players can now create and join custom lobbies.
          </li>
        </ul>
      </div>
    </>
  );
};

const SoundDesignAndAudioEng = () => {
  return (
    <>
      <h3 className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-jost font-bold">
        🎧 Sound Design & Audio Engineering
      </h3>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 mt-2 md:mt-3 xl:mt-4">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          FMOD Integration
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Migrated and implemented FMOD into Unreal Engine 5.3.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 mb-2 md:mb-3 xl:mb-4">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Sound Features
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Fixed/implemented{" "}
            <span className="font-semibold text-[#f5a238]">
              UI, combat loop
            </span>
            , and{" "}
            <span className="font-semibold text-[#f5a238]">ability sounds</span>
            .
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Reworked{" "}
            <span className="font-semibold text-[#f5a238]">
              character sounds
            </span>{" "}
            (steps, jumps, death, etc.).
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Implemented{" "}
            <span className="font-semibold text-[#f5a238]">
              ambient soundscapes
            </span>{" "}
            and redesigned{" "}
            <span className="font-semibold text-[#f5a238]">
              volume balancing
            </span>
            .
          </li>
          <li className="text-xs md:text-sm xl:text-base">Original Music</li>
        </ul>
      </div>
    </>
  );
};

const TechnicalDevelopment = () => {
  return (
    <>
      <h3 className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-jost font-bold">
        🔧 Technical Development (Behind the Scenes)
      </h3>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 mt-2 md:mt-3 xl:mt-4">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Core Systems & Scalability
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Rebuilt{" "}
            <span className="font-semibold text-[#f5a238]">Game Modes</span> for
            efficiency and scalability.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Built{" "}
            <span className="font-semibold text-[#f5a238]">
              Ability Set System
            </span>{" "}
            to grant abilities to any actor
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Implemented Save System for persistent data.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Completed Enhanced Input System: real-time ability switching, deck
            system compatibility.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Ability Foundations
        </p>
        <p className="ml-2 md:ml-2.5 xl:ml-3">
          Built scalable ability base types:
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">Aim</li>
          <li className="text-xs md:text-sm xl:text-base">Area</li>
          <li className="text-xs md:text-sm xl:text-base">Self Buff</li>
          <li className="text-xs md:text-sm xl:text-base">Charging</li>
          <li className="text-xs md:text-sm xl:text-base">
            Refactored Chant ability base (still being improved).
          </li>
        </ul>

        <p className="ml-2 md:ml-2.5 xl:ml-3">
          Most abilities migrated to these new bases for performance and
          scalability.
        </p>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Migration & Optimization
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Fully migrated from{" "}
            <span className="font-semibold text-[#f5a238]">
              Unreal Engine 4.27 to 5.3.
            </span>
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Converted critical logic from{" "}
            <span className="font-semibold text-[#f5a238]">
              Blueprints to C++.
            </span>
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Refactored code, assets, and systems for optimization.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Infrastructure & DevOps
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Created a new{" "}
            <span className="font-semibold text-[#f5a238]">
              Dev Environment
            </span>{" "}
            with Git & Gitea for agile team access.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Setup{" "}
            <span className="font-semibold text-[#f5a238]">
              build automation:
            </span>{" "}
            deploy new builds every 10 minutes.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Developed{" "}
            <span className="font-semibold text-csYellow">
              Launcher & patching system.
            </span>
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Created robust{" "}
            <span className="text-csYellow font-semibold">
              Backend infrastructure:
            </span>{" "}
            accounts, friends, matchmaking, patching, progression.
          </li>
        </ul>
      </div>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 mb-2 md:mb-3 xl:mb-4">
        <p className="text-sm md:text-base xl:text-lg font-medium">
          Cloud & Integration
        </p>

        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Designed{" "}
            <span className="font-semibold text-csYellow">
              Kubernetes Cluster
            </span>{" "}
            (Agones spec).
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Integrated Fleet Manager with autoscaling.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Integrated Google & Epic third-party auth.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Integrated Sequence Blockchain for on-chain functionality.
          </li>
        </ul>
      </div>
    </>
  );
};

const Qa = () => {
  return (
    <>
      <h3 className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-jost font-bold">
        🧪 Quality Assurance (QA)
      </h3>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 my-2 md:my-3 xl:my-4">
        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Built{" "}
            <span className="font-semibold text-csYellow">Data Validator</span>{" "}
            and validation patterns for assets.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Created test maps for:
            <ul className="list-disc">
              <li className="text-xs md:text-sm xl:text-base">UI widgets</li>
              <li className="text-xs md:text-sm xl:text-base">
                Animations & VFXs
              </li>
            </ul>
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Structured{" "}
            <span className="font-semibold text-csYellow">QA test systems</span>{" "}
            across all domains (UI, combat, maps, VFX, etc.).
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Integrated{" "}
            <span className="font-semibold text-csYellow">Unreal Insights</span>{" "}
            for performance profiling.
          </li>
        </ul>
      </div>
    </>
  );
};

const GameDesign = () => {
  return (
    <>
      <h3 className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-jost font-bold">
        🎨 Game & System Design
      </h3>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 my-2 md:my-3 xl:my-4">
        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Completely redesigned the game’s vision and roadmap through 2026.
            <ul className="list-disc">
              <li className="text-xs md:text-sm xl:text-base">
                Created multiple scalable development paths.
              </li>
              <li className="text-xs md:text-sm xl:text-base">
                Split roadmap into clear stages.
              </li>
              <li className="text-xs md:text-sm xl:text-base">
                Documented systems and processes for future onboarding and team
                growth.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

const AdditionalInfo = () => {
  return (
    <>
      <h3 className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-jost font-bold">
        🧩 Additional QoL & Player-Facing Enhancements
      </h3>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 my-2 md:my-3 xl:my-4">
        <ul className="list-disc flex flex-col gap-1">
          <li className="text-xs md:text-sm xl:text-base">
            Ongoing QoL improvements across all systems to streamline player
            experience.
          </li>
          <li className="text-xs md:text-sm xl:text-base">
            Introduced features that enhance replayability through build
            variation and damage playstyles.
          </li>
        </ul>
      </div>
    </>
  );
};

const Summary = () => {
  return (
    <>
      <h3 className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-jost font-bold">
        ✅ Summary
      </h3>

      <div className="text-white flex flex-col gap-2 md:gap-2.5 xl:gap-3 my-2 md:my-3 xl:my-4">
        <p className="text-xs md:text-sm xl:text-base text-white">
          This period marked a major leap forward—from core system reworks and
          scalability solutions to player-visible features like advanced combat
          systems and UI. The game has evolved from a prototype into a robust
          foundation for full-scale development and live service.
        </p>

        <p className="text-xs md:text-sm xl:text-base text-white">
          More features are currently in development and will be announced in
          future updates.
        </p>
      </div>
    </>
  );
};
// [#f5a238]
