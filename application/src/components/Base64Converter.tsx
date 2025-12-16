export default function Base64Converter() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Base64 Tool
                </h1>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-700">Encode</h2>
                            <span className="text-sm text-gray-500">Text → Base64</span>
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="encode-input" className="block text-sm font-medium text-gray-600">
                                Plain Text
                            </label>
                            <textarea
                                id="encode-input"
                                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                                placeholder="Enter text to encode..."
                            />
                            <button
                                type="button"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                            >
                                Encode to Base64
                            </button>
                            <label htmlFor="encode-output" className="block text-sm font-medium text-gray-600 pt-2">
                                Base64 Output
                            </label>
                            <textarea
                                id="encode-output"
                                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 resize-none font-mono text-sm"
                                placeholder="Base64 encoded output will appear here..."
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-700">Decode</h2>
                            <span className="text-sm text-gray-500">Base64 → Text</span>
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="decode-input" className="block text-sm font-medium text-gray-600">
                                Base64 Input
                            </label>
                            <textarea
                                id="decode-input"
                                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none font-mono text-sm transition-all"
                                placeholder="Enter Base64 to decode..."
                            />
                            <button
                                type="button"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                            >
                                Decode from Base64
                            </button>
                            <label htmlFor="decode-output" className="block text-sm font-medium text-gray-600 pt-2">
                                Plain Text Output
                            </label>
                            <textarea
                                id="decode-output"
                                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 resize-none"
                                placeholder="Decoded text will appear here..."
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
