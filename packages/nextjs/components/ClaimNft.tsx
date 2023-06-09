import React, { useState } from "react";

interface Task {
  name: string;
  description: string;
  imageUrl: string;
}

const ClaimNFT: React.FC = () => {
  const tasks: Task[] = [
    {
      name: "Groupie",
      description: "Follow the artist on Spotify",
      imageUrl: "/assets/GroupieNFT.png",
    },
    {
      name: "Superfan",
      description: "Follow the artist on Spotify, save at least 5 of their tracks",
      imageUrl: "/assets/GroupieNFT.png",
    },
    {
      name: "Stage Regular",
      description:
        "Follow the artist on Spotify, save at least 10 of their tracks, and share their latest album on social media",
      imageUrl: "/assets/GroupieNFT.png",
    },
    {
      name: "Backstage VIP",
      description:
        "Follow the artist on Spotify, save all of their tracks, share their latest album on social media, and attend their concert",
      imageUrl: "/assets/GroupieNFT.png",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const openModal = (task: Task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setModalOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-lg rounded bg-black">
        {tasks.map((task, index) => (
          <div key={index} className=" p-6 px-6 flex items-center justify-between gap-12">
            <h3 className="text-xl font-bold">{task.name}</h3>
            <p className="text-xl text-center font-light">{task.description}</p>

            <button className="bg-[#856F7A] text-white px-4 py-2 rounded" onClick={() => openModal(task)}>
              Claim
            </button>
          </div>
        ))}
      </div>

      {selectedTask && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
            modalOpen ? "" : "hidden"
          }`}
        >
          <div className="bg-[#1A1D1F] p-32 min-w-lg mx-auto rounded-lg text-center">
            <h3 className="text-2xl">Congratulations!</h3>
            <img src={selectedTask.imageUrl} alt={selectedTask.name} className="w-64 h-64 object-contain mb-4" />

            <h3 className="text-2xl font-bold mb-4">{selectedTask.name}</h3>
            <button className="bg-[#9DFF94] text-black px-8 py-2" onClick={closeModal}>
              Mint
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClaimNFT;
