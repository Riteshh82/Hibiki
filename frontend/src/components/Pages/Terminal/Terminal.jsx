import React, { useState, useEffect, useRef } from 'react';
import Header from '../../Header';
import { Fade } from 'react-awesome-reveal';
import { RoughNotation } from "react-rough-notation";

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const terminalRef = useRef(null);

  const availableCommands = [
    { command: 'help', description: 'Display this message' },
    { command: 'joke', description: 'Get a quick laugh with a funny joke' },
    { command: 'news', description: 'Get the latest news headlines' },
    { command: 'weather', description: 'Get the current weather' },
    { command: 'about', description: 'Learn more about me' },
    { command: 'contact', description: 'Get in touch with me' },
    { command: 'clear', description: 'Clear the terminal' }
  ];

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    let response = '';

    if (trimmedInput === 'help') {
      response = 'List of available commands:\n' + availableCommands.map(cmd => `${cmd.command} - ${cmd.description}`).join('\n');
    } else if (trimmedInput === 'about') {
      response = "I'm Ritesh, a B.Tech Computer Science student at Parul University. Passionate about technology, I'm always exploring new frontiers in coding and software development.";
    } else if (trimmedInput === 'joke') {
      const jokes = [
        "Why don’t scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I’m reading a book on anti-gravity. It’s impossible to put down!",
        "Why did the bicycle fall over? Because it was two tired!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "Why couldn't the leopard play hide and seek? Because he was always spotted!",
      ];
      response = jokes[Math.floor(Math.random() * jokes.length)];
    } else if (trimmedInput === 'news') {
      const fetchNews = async () => {
        try {
          const headlines = await getLatestNews();
          const response = headlines.join('\n');
          setChatHistory(prevHistory => [...prevHistory, { input: trimmedInput, output: response }]);
          setOutput(response);
        } catch (error) {
          console.error('Error getting news:', error);
          const response = 'Error fetching news. Please try again later.';
          setOutput(response);
        }
      };
    
      fetchNews();
    }
     else if (trimmedInput === 'weather') {
      response = getCurrentWeather();
    } else if (trimmedInput === 'contact') {
      response = (
        <div>
          You can contact us via email at{" "}
          <a href="mailto:riteshky19@gmail.com">riteshky19@gmail.com</a>
        </div>
      );
    } else if (trimmedInput === 'clear') {
      response = '';
      setChatHistory([]);
    } else if (trimmedInput === '') {
      response = '';
    } else {
      response = 'Command not recognized. Type `help` for a list of available commands.';
    }

    if (trimmedInput !== 'clear') {
      const chatEntry = { input: input, output: response }; // Store original input
      setChatHistory(prevHistory => [...prevHistory, chatEntry]);
    }

    setOutput(response);
    setInput('');
  };

  const getCurrentWeather = () => {
    return '🌤️ Sunny with a chance of coding!';
  };

  const getLatestNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=42a97d3a34de461a85a62fbd5786efbb');
      const data = await response.json();
      const headlines = data.articles.map(article => article.title);
      const randomHeadlines = headlines.slice(0, 3);
      return randomHeadlines;
    } catch (error) {
      console.error('Error fetching news:', error);
      return 'Error fetching news. Please try again later.';
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <>
      <Header />
      <Fade direction="up" duration={1000}>
        <div className="mx-[1rem]">
          <div className=" max-w-6xl mx-auto px-5 mt-3">
            <RoughNotation
              show="underline"
              animationDelay={400}
              animationDuration={500}
              className="text-[2rem] font-bold"
            >
              Terminal
            </RoughNotation>
          </div>
        </div>
      </Fade>
      <Fade direction="up" duration={1000}>
        <div className="mx-[1rem]">
          <div className="bg-gray-900 text-white max-w-6xl h-120 mx-auto py-[1rem] mt-[2rem] px-5 lg:gap-[10rem] gap-[2rem] rounded-md ">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></div>
              </div>
              <button onClick={() => { setOutput(''); setChatHistory([]); }} className="text-sm text-gray-400 hover:text-white">Clear</button>
            </div>
            <pre ref={terminalRef} className="whitespace-pre-wrap mx-auto overflow-y-scroll will-change-scroll h-96">
              {chatHistory.map((entry, index) => (
                <div key={index} className='mb-2'>
                  <span className="text-green-400">$ ritesh &gt;&gt; </span>{entry.input}<br />
                  {entry.output && <span className="text-yellow-200">{entry.output}</span>}
                </div>
              ))}
              <form onSubmit={handleInputSubmit}>
                <div className="flex items-center">
                  <span className="text-green-400 text-nowrap">$ ritesh &gt;&gt; </span>
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="bg-transparent border-none outline-none "
                    style={{ width: '100%', whiteSpace: 'normal' }}
                    placeholder="Type `help` command to start."
                  />
                </div>
              </form>
            </pre>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Terminal;
