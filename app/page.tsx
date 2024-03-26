"use client";
import Image from "next/image";
import { ButtonFancyMain } from "@/components/ui/buttons";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Tabs } from "@/components/ui/tabs";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconInfoSquareRounded,
  IconRefreshDot,
} from "@tabler/icons-react";

export default function Home() {
  const tabs = [
    {
      title: "Audio",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <BentoGrid className="md:auto-rows-[20rem]">
            <BentoGridItem
              title="Ardour"
              description="Description"
              header="Header"
              className={"[&>p:text-lg]"}
              icon={<IconHome />}
            />
            <BentoGridItem
              title="LMMS"
              description="Description"
              header="Header"
              className={"[&>p:text-lg]"}
              icon={<IconHome />}
            />
            <BentoGridItem
              title="FL Studio"
              description="OOB support for Windows DAWs with realtime audio!"
              header="Header"
              className={"[&>p:text-lg]"}
              icon={<IconHome />}
            />
            <BentoGridItem
              title="Realtime Audio"
              description="Realtime professional audio configurations for your system out of the box"
              header="Header"
              className="p-3"
              icon={<IconHome />}
            />
          </BentoGrid>
        </div>
      ),
    },
    {
      title: "Graphics",
      value: "",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <BentoGrid className="md:auto-rows-[20rem]">
            <BentoGridItem
              title="GIMP"
              description="The classic open source image editor, with plugins included!"
              header="Header"
              className="p-3"
              icon={<IconHome />}
            />
            <BentoGridItem
              title="Krita"
              description="Description"
              header="Header"
              className={"[&>p:text-lg]"}
              icon={<IconHome />}
            />
          </BentoGrid>
        </div>
      ),
    },
    {
      title: "Video",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
        </div>
      ),
    },
    {
      title: "Modeling",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
        </div>
      ),
    },
    {
      title: "Game Making",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
        </div>
      ),
    },
  ];

  const navItems = [
    {
      name: "Home",
      link: "home",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "about",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Software",
      link: "software-selection",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Try out",
      link: "image-picker",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
      <div id="home"></div>
      <BackgroundGradientAnimation
        firstColor="173, 159, 255"
        secondColor="250, 176, 160"
        thirdColor="254, 191, 255"
        forthColor="173, 159, 255"
        fifthColor="250, 176, 160"
      >
        <div className="absolute z-50 inset-0 w-screen h-screen flex flex-row justify-center items-center">
          <div>&nbsp;</div>

          <div className="z-50 flex flex-col justify-center items-center">
            <Image
              src="/AtomicStudioLogo.png"
              alt="Atomic Studio Logo"
              width="800"
              height="400"
            />
            <p className="bg-clip-text text-transparent bg-white text-xl">
              Your complete content creation setup anywhere.
            </p>

            <div className="flex flex-row flex-wrap mt-4">
              <ButtonFancyMain section="about">About</ButtonFancyMain>

              <ButtonFancyMain section="software-selection">
                Software Selection
              </ButtonFancyMain>

              <ButtonFancyMain section="image-picker">
                Try it out
              </ButtonFancyMain>
            </div>
          </div>

          <div>&nbsp;</div>
        </div>
      </BackgroundGradientAnimation>

      <div id="about" className="w-screen h-screen bg-purple-800">
        <h1 className="text-center text-6xl font-bold pt-10 pb-20 text-white">
          About
        </h1>

        <div className="px-48 text-white flex flex-row flex-wrap">
          <BackgroundGradient
            containerClassName="max-w-96 mx-10"
            className="rounded-[22px] p-4 sm:p-10 bg-violet-700 max-w-96"
          >
            <h1 className="text-3xl text-center pb-5">Atomicity</h1>
            <p>
              Atomic Studio is a Linux distribution based on Fedora Atomic,
              specifically Universal Blue provided images and built with
              BlueBuild, being based on these technologies allows it to be
              completely atomic and reliable for serious usage, allowing you to
              rollback from any updates that break your system, or pin any
              deployments so that you may have a consistent image until you are
              able to update and make sure its going to work well.
            </p>
          </BackgroundGradient>
          <BackgroundGradient
            containerClassName="max-w-96 mx-10"
            className="rounded-[22px] p-4 sm:p-10 bg-violet-700 max-w-96 text-justify"
          >
            <h1 className="text-3xl text-center pb-5">Compatibility</h1>
            <p>
              We provide software to make your experience better when running
              software from other distributions or orthodox installation
              methods. We leverage Distrobox, Nix, Brew, Wine-TKG and custom
              containers for installing and managing software from any
              distribution or package managing system through our CLI manager.
              The manager also serves as an installer for software like Autodesk
              Maya, Davinci Resolve, and many others.
            </p>
          </BackgroundGradient>

          <BackgroundGradient
            containerClassName="max-w-96 mx-10"
            className="rounded-[22px] p-4 sm:p-10 bg-violet-700 max-w-96"
          >
            <h1 className="text-3xl text-center pb-5">Praticality</h1>
            <p>
              Studio CLI is the main manager for Atomic Studio, it handles most
              of the day to day managing of your system, things like updating
              the system, installing packages, settings realtime permissions,
              changing configurations for pipewire and other programs, testing
              your speakers, and managing wine programs like FL Studio. Make
              sure to contribute to it so that it may have even more support for
              more things!
            </p>
          </BackgroundGradient>
        </div>
      </div>

      <div
        id="software-selection"
        className="w-screen h-full py-40 bg-violet-900"
      >
        <h1 className="text-center text-6xl font-bold pt-10 pb-5 text-white">
          Our Software Selection
        </h1>
        <div className="h-dvh [perspective:1000px] relative b flex flex-col mx-40 my-0 max-w-[120rem] items-start justify-start py-3">
          <Tabs tabs={tabs} />
        </div>
      </div>

      <div
        id="image-picker"
        className="w-screen h-screen bg-purple-800 px-48 text-white"
      >
        <h1 className="text-center text-6xl font-bold py-10">Image Picker</h1>

        <p className="text-xl text-center pb-10">
          This page only exists because the distro isnt done yet, this will be
          just some screenshots and a way to choose them.
        </p>

        <div className="px-48 text-white flex flex-row flex-wrap">
          <BackgroundGradient
            containerClassName="max-w-96 mx-10"
            className="rounded-[22px] p-4 sm:p-10 bg-violet-700 max-w-96"
          >
            <h1 className="text-3xl text-center pb-5">AMD and Intel</h1>
            <p className="mb-8">
              AMD images have specific tweaks for AMD and Intel hardware, apps
              for managing your AMD GPUs and drivers for those out of the box
            </p>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <button className="border-2 border-white p-3 rounded-full mb-2 flex-grow hover:scale-110 hover:bg-violet-700 hover:border-0 transition-all">
                  KDE
                </button>
                <button className="flex-shrink">
                  <IconInfoSquareRounded />
                  <IconRefreshDot />
                </button>
              </div>
              <div className="flex flex-row">
                <button className="border-2 border-white p-3 rounded-full mb-2 flex-grow">
                  GNOME
                </button>
                <button className="flex-shrink">
                  <IconInfoSquareRounded />
                  <IconRefreshDot />
                </button>
              </div>
            </div>
          </BackgroundGradient>

          <BackgroundGradient
            containerClassName="max-w-96 mx-10"
            className="rounded-[22px] p-4 sm:p-10 bg-violet-700 max-w-96"
          >
            <h1 className="text-3xl text-center pb-5">Nvidia</h1>
            <p>
              Studio CLI is the main manager for Atomic Studio, it handles most
              of the day to day managing of your system, things like updating
              the system, installing packages, settings realtime permissions,
              changing configurations for pipewire and other programs, testing
              your speakers, and managing wine programs like FL Studio. Make
              sure to contribute to it so that it may have even more support for
              more things!
            </p>
          </BackgroundGradient>
        </div>
      </div>
    </>
  );
}
