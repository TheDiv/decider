import React, { useState } from 'react';
import { Shuffle, Plus, Trash2, Dice1 as Dice, RotateCcw } from 'lucide-react';
import { StoicWisdom } from './components/StoicWisdom';

interface Option {
  id: string;
  text: string;
}

const QUICK_NUMBERS = [2, 3, 4, 5, 10, 20, 50, 100];

function App() {
  const [options, setOptions] = useState<Option[]>([]);
  const [newOption, setNewOption] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [quickResult, setQuickResult] = useState<number | null>(null);
  const [customNumber, setCustomNumber] = useState('');

  const addOption = (e: React.FormEvent) => {
    e.preventDefault();
    if (newOption.trim()) {
      setOptions([...options, { id: crypto.randomUUID(), text: newOption.trim() }]);
      setNewOption('');
    }
  };

  const removeOption = (id: string) => {
    setOptions(options.filter(option => option.id !== id));
    if (result && options.length <= 2) {
      setResult(null);
    }
  };

  const generateRandom = () => {
    if (options.length > 0) {
      const randomIndex = Math.floor(Math.random() * options.length);
      setResult(options[randomIndex].text);
      setQuickResult(null);
    }
  };

  const quickDecide = (max: number) => {
    const randomNum = Math.floor(Math.random() * max) + 1;
    setQuickResult(randomNum);
    setResult(null);
  };

  const handleCustomNumber = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(customNumber);
    if (num > 1) {
      quickDecide(num);
      setCustomNumber('');
    }
  };

  const resetOptions = () => {
    setOptions([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-3 sm:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Shuffle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Decider</h1>
          </div>

          <StoicWisdom />

          <div className="h-px bg-gray-200 my-6 sm:my-8"></div>

          <div className="mb-6 sm:mb-8">
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-gray-700">Quick Decide</h2>
              <p className="text-sm text-gray-500 mt-1">Randomly select a number between 1 and N - perfect for quick decisions when any choice will do.</p>
            </div>
            <div className="grid grid-cols-4 sm:flex gap-2 items-center mb-3">
              {QUICK_NUMBERS.map((num) => (
                <button
                  key={num}
                  onClick={() => quickDecide(num)}
                  className="px-3 py-2 sm:px-4 sm:py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors font-medium text-sm sm:text-base w-full sm:w-auto"
                >
                  {num}
                </button>
              ))}
            </div>
            <form onSubmit={handleCustomNumber} className="flex gap-2">
              <input
                type="number"
                min="2"
                value={customNumber}
                onChange={(e) => setCustomNumber(e.target.value)}
                placeholder="Custom"
                className="flex-1 sm:flex-none sm:w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
              />
              <button
                type="submit"
                disabled={!customNumber || parseInt(customNumber) < 2}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                Go
              </button>
            </form>
            {quickResult !== null && (
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-500 mb-2">Quick Result:</div>
                <div className="text-xl sm:text-2xl font-bold text-purple-600 bg-purple-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-block">
                  {quickResult}
                </div>
              </div>
            )}
          </div>

          <div className="h-px bg-gray-200 my-6 sm:my-8"></div>

          <div className="mb-6 sm:mb-8">
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-gray-700">Specific Options</h2>
              <p className="text-sm text-gray-500 mt-1">Create your own list of options and let fate decide - perfect for when you need to choose between specific alternatives.</p>
            </div>

            <form onSubmit={addOption} className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  placeholder="Add an option..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </form>

            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {options.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg group"
                >
                  <span className="text-gray-700 text-sm sm:text-base">{option.text}</span>
                  <button
                    onClick={() => removeOption(option.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={generateRandom}
                  disabled={options.length < 2}
                  className={`flex-1 sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-base sm:text-lg font-semibold transition-all
                    ${options.length < 2 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg'
                    }`}
                >
                  <Dice className="w-5 h-5" />
                  Decide
                </button>

                <button
                  onClick={resetOptions}
                  disabled={options.length === 0}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-base sm:text-lg font-semibold transition-all
                    ${options.length === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                    }`}
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>

              {result && (
                <div className="text-center w-full">
                  <div className="text-sm text-gray-500 mb-2">Result:</div>
                  <div className="text-xl sm:text-2xl font-bold text-purple-600 bg-purple-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
                    {result}
                  </div>
                </div>
              )}

              {options.length < 2 && (
                <p className="text-sm text-gray-500 text-center">
                  Add at least 2 options to generate a random pick
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;