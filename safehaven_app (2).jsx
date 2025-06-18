import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockNews = [
  {
    title: "GBV Hotline Expanded to Rural Areas",
    content: "New support centers have opened in Eastern Cape and Limpopo for survivors of abuse.",
    date: "2025-06-18",
  },
  {
    title: "Most Wanted: Convicted Rapist Still at Large",
    content: "SAPD urges anyone with info to contact Crime Stop at 08600 10111.",
    date: "2025-06-17",
  },
];

const mockVideos = [
  {
    title: "Self-Defense Basics for Women",
    url: "https://www.youtube.com/embed/ABC123",
  },
  {
    title: "Safety Tips When Traveling Alone",
    url: "https://www.youtube.com/embed/XYZ456",
  },
  {
    title: "How to Fight Back: Women Self Defense",
    url: "https://www.youtube.com/embed/WOMENDEF123",
  }
];

const childSafetySteps = [
  "Always stay close to a trusted adult in public.",
  "Know your full name, address, and contact number.",
  "If someone makes you uncomfortable, say 'NO!' loudly and walk away.",
  "Never go anywhere with a stranger, even if they offer gifts or help.",
  "Talk to someone safe if someone touches you inappropriately."
];

const childAffirmations = [
  "I am brave and strong.",
  "My voice matters.",
  "I deserve to feel safe.",
  "If something feels wrong, I can tell someone."
];

const survivorStories = [
  "I survived abuse and now help others heal. - Anonymous",
  "Speaking out was the hardest, but it saved me. - L.K.",
];

const affirmations = [
  "You are powerful, not powerless.",
  "Your truth matters. You matter.",
  "Healing is your right. Not a privilege.",
  "LGBTQ+ lives deserve peace and protection."
];

const SafeHavenApp = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-pink-800">SafeHaven</h1>
        <p className="text-pink-600">Empowering Survivors. Exposing Abusers. Healing Communities.</p>
        <p className="text-sm text-pink-500">Current Time: {currentTime}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">Emergency Help</h2>
            <p>If you're in danger or need help now, contact our 24/7 hotline.</p>
            <Button className="mt-2 bg-pink-600 hover:bg-pink-700 text-white">Call Now: 0800 428 428</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">Panic Button</h2>
            <p>Activate this button in a crisis to send an alert to your trusted contacts.</p>
            <Button className="mt-2 bg-red-600 hover:bg-red-700 text-white">Send Panic Alert</Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">Words of Affirmation</h2>
        <ul className="list-disc list-inside text-pink-700 space-y-1">
          {affirmations.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">Affirmations for Children</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-1">
          {childAffirmations.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">Survivor Stories</h2>
        {survivorStories.map((story, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p className="italic">"{story}"</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">Educational Videos</h2>
        <div className="grid gap-4">
          {mockVideos.map((video, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-pink-700">{video.title}</h3>
                <iframe
                  className="w-full aspect-video mt-2"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">Child Safety Routine</h2>
        <ul className="list-disc list-inside text-pink-700 space-y-1">
          {childSafetySteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-pink-800 mb-4">Latest Newsroom (Safe View)</h2>
        <div className="grid gap-4">
          {mockNews.map((news, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-pink-700">{news.title}</h3>
                <p className="text-sm text-pink-500 mb-2">{news.date}</p>
                <p>{news.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center py-4 text-pink-600">
        © 2025 SafeHaven | Created with ❤️ for all survivors | Notifications Enabled
      </footer>
    </div>
  );
};

export default SafeHavenApp;
