import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "~~/components/Card";
import Modal from "~~/components/Modal";
import TabButton from "~~/components/TabButton";
import DashboardLayout from "~~/components/dashboard/DashboardLayout";

type CardData = {
  title: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  isRecommended?: boolean;
};

const DashboardPage: React.FC = () => {
  /*   const [token, setToken] = useState<string>("");
   */ const [activeTab, setActiveTab] = useState("Active");
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleCardDetailsClick = (card: CardData) => {
    setSelectedCard(card);
    setShowModal(true);
    console.log(selectedCard);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  const tabs = ["Active", "Recommended", "All"];

  const cards: CardData[] = [
    {
      title: "Groupie",
      description: "Follow Artist",
      imageUrl: "/assets/Groupie.png",
      isActive: true,
    },
    {
      title: "Superfan",
      description: "Stage Regular",
      imageUrl: "/assets/Groupie.png",
      isActive: true,
    },
    {
      title: "Stage Regular",
      description: "Superfan + Specific Time Period",
      imageUrl: "/assets/StageRegular.png",
      isActive: true,
    },
    {
      title: "Backstage VIP",
      description: "Stage Regular + Long-term Listener/Recent Songs",
      imageUrl: "/assets/Groupie.png",
      isActive: false,
      isRecommended: true,
    },
  ];

  const filteredCards =
    activeTab === "All"
      ? cards
      : cards.filter(card => {
          if (activeTab === "Active") {
            return card.isActive;
          }
          if (activeTab === "Recommended") {
            return card.isRecommended;
          }
          return true;
        });

  /*  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find(elem => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token || "");
  }, []); */

  const logout = () => {
    /*     setToken("");
     */ window.localStorage.removeItem("token");
  };

  return (
    <DashboardLayout>
      <h2 className="font-bold text-xl mb-8">My Profile</h2>

      <div className="rounded bg-[#1A1D1F]">
        <div>
          <Image src={"/assets/coverbg.png"} alt="Cover Image" width={1000} height={300} layout="responsive" />
        </div>
        <div className="flex justify-between py-6 px-6 items-center">
          <div className="rounded-full translate-y-[-50%]">
            <img src={"/assets/profile.png"} alt="Cover Image" className="rounded-full" />
          </div>
          <div className="w-3/5 text-center">
            <p>
              As an artist, John Smith constantly seeks to challenge himself and explore new horizons, ensuring that his
              art remains fresh, engaging, and relevant. With each brushstroke, sculpture, or mixed media creation, he
              invites viewers into a world of beauty, introspection, and imagination.
            </p>
          </div>
          <div>
            <Link href="/" passHref className="btn bg-[#9DFF94] text-black rounded">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="p-8 bg-[#1A1D1F]">
          <div className="flex space-x-4 mb-4">
            {tabs.map(tab => (
              <TabButton key={tab} label={tab} active={tab === activeTab} onClick={() => handleTabClick(tab)} />
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {filteredCards.map((card, index) => (
              <div key={index}>
                <Card
                  key={index}
                  title={card.title}
                  imageUrl={card.imageUrl}
                  description={card.description}
                  isActive={card.isActive}
                  isRecommended={card.isRecommended}
                  onDetailsClick={() => handleCardDetailsClick(card)}
                />
                {showModal && <Modal onClose={handleCloseModal} title={card.title} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button onClick={logout}>Logout</button>
    </DashboardLayout>
  );
};

export default DashboardPage;
