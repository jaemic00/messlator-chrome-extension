# messlator-chrome-extension
Messlator is a laughably simple chrome extension that allows you to translate messages on messenger.com in real time.

## Building

Just clone this repo, put your favorite CORS proxy in the `index.js` file and use `npm install` and `webpack` in the root directory to build the project. Should be fine.

## Usage

The usage is flawed for ~~two three~~ four reasons:

1. You have to manually click the extension button to update the messages to translate
2. Because of CORS we can't have nice things.
3. It's not available on the Chrome Web Store because I'm broke
4. I don't know anything about Chrome extensions development

So, use at your own risk. This extension is by no means developed to be used in a production environment. It's been created in my spare time to help a spanish flatmate of mine understand our group chat.

### So, in order to use it:

Build the project (or don't, you can use my build for all I care), go into developer mode (Chrome => 3 dot menu => More tools => Extensions => Developer mode) and click `Load unpacked`. Point to the dist directory.

Go to the messenger.com website, select a conversation and click on the extension icon (if it's not pinned, pin it for convenience). After doing that you can just click on the messages that you wish to translate. The extension guesses the language by itself.

## Tinkering with code

All of the logic lives in the `src/index.js` file. It's called index.js because I'm too busy with uni stuff to properly configure webpack.
It is entirely based on this API [here](https://github.com/cjrsgu/google-translate-api-browser). The default language is spanish (`es`). You can change it to whatever you like. 
The `setCORS()` function sets a cors proxy to use to send requests. You can use [CORS anywhere](https://cors-anywhere.herokuapp.com/) or something.
Simply change the `setCORS("")` to `setCORS("https://cors-anywhere.herokuapp.com/")`. Remember that it has a request limit.

## Contributions

I don't plan on continuing this project so if you have any ideas to make it into an actual, working product then feel free to send pull requests. I promise I will have a look at them in my spare time.
