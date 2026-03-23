import { Navbar } from "../components/Navbar";
import { TopicCard } from "../components/TopicCard";
import { useTopics } from "../hooks/useTopics";

export const HomePage = () => {
  const { topics, loading } = useTopics();
  return (
    <div className="w-full ">
      <Navbar />
      <main className="p-2 flex flex-col gap-6">
        {loading ? (
          // Uma animação de carregamento simples
          <div className="w-full h-svw items-center justify-center flex ">
            <div className="border-b border-neutral-700">
              <div className="animate-bounce w-11 h-11 bg-black rounded-full relative ">
                <div className="w-3 h-3 rounded-full bg-white absolute top-1/2 left-1/2"></div>
                <div className="w-3 h-3 rounded-full bg-white absolute top-1/3 left-1"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {topics.map((topic) => (
              <TopicCard topic={topic} key={topic.id} />
            ))}
          </>
        )}
      </main>
    </div>
  );
};
