//fetching api data using js from json format

let myjokes = [
    {
        "category": "Programming",
        "type": "single",
        "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 38,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 43,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 301,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "How do you make holy water? You freeze it and drill holes in it.",
        "flags": {
            "nsfw": false,
            "religious": true,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 203,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Today I learned that changing random stuff until your program works is \"hacky\" and a \"bad coding practice\" but if you do it fast enough it's \"Machine Learning\" and pays 4x your current salary.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 33,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "I'd tell you a joke about NAT but I would have to translate.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "safe": true,
        "id": 319,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "In Soviet Russia, gay sex gets you arrested. In America, getting arrested gets you gay sex.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 289,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 41,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 123,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 184,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 45,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "I have these weird muscle spasms in my gluteus maximus.\nI figured out from my doctor that everything was alright:\nHe said \"Weird flex, butt okay.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 82,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Misc",
        "type": "single",
        "joke": "I went to the zoo the other day. There was only a dog in it – it was a shihtzu.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "safe": false,
        "id": 307,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "Me and my Jewish friend were eating lunch and I farted. He got mad so I said \"cmon man a little gas never killed anyone\".",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": true,
            "sexist": false,
            "explicit": true
        },
        "id": 103,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "How do you make holy water? You freeze it and drill holes in it.",
        "flags": {
            "nsfw": false,
            "religious": true,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 203,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "I was reading a great book about an immortal dog the other day. It was impossible to put down.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 236,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Pun",
        "type": "single",
        "joke": "I'm reading a book about anti-gravity. It's impossible to put down!",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 126,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Dark",
        "type": "single",
        "joke": "My little daughter came to me all excited, saying \"Daddy! Daddy! Guess how old I'll be in June!\"\n\"Oh I don't know princess, why don't you tell me?\" I said. She gave me a huge smile and held up four fingers.\nIt's now three hours later, police have joined in and she still won't say where she got them.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 165,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "ASCII silly question, get a silly ANSI.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 25,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "\"Knock, knock.\"\n\"Who's there?\"\n\n[very long pause]\n\n\"Java.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 36,
        "safe": true,
        "lang": "en"
    }
]

let i = Math.floor(Math.random()*(myjokes.length-1))
console.log(i);
document.getElementsByClassName("joker")[0].innerHTML = myjokes[i].joke
document.getElementsByClassName("joker")[1].innerHTML = myjokes[i].joke
document.getElementsByClassName("joker")[2].innerHTML = myjokes[i].joke
document.getElementsByClassName("joker")[3].innerHTML = myjokes[i].joke