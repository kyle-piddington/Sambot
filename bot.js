
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
var complimentsIdx = 0; 
var hugsIdx = 0
var zalgo = require('to-zalgo')

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array
}

var hugs = shuffle(
    [
    "Come to supper, all; we have bread and cheese and tea, and hugs and kisses for dessert. ~Jay Benson Hamilton, \"How Santa Claus Made One Dollar Hold Out,\" 1891",
"A hug is like a boomerang - you get it back right away. ~Bil Keane, \"Family Circus\"",
"Millions and millions of years would still not give me half enough time to describe that tiny instant of all eternity when you put your arms around me and I put my arms around you.  ~Jacques Préver",
"You can\'t wrap love in a box, but you can wrap a person in a hug.  ~Author Unknown",
"I have a present for you, but I need to borrow your arms for wrapping paper.  ~Author Unknown",
"Hug Department:  Always Open  ~Author Unknown",
"When you are hugging a child, always be the last one to let go. You never know how long they need it. ~Author Unknown",
"I love hugging.  I wish I was an octopus, so I could hug ten people at a time.  ~Drew Barrymore",
"There\'s something in a simple hug\nThat always warms the heart,\nIt welcomes us back home\nAnd makes it easier to part....\n~Johnny Ray Ryder, Jr., \"A Simple Hug\"",
"No matter how hard you hug your money, it never hugs back.  ~Quoted in P.S. I Love You, compiled by H. Jackson Brown, Jr.",
"Arm ourselves for war?  No!  All the arms we need are for hugging.  ~Author Unknown",
"Sometimes a silent hug is the only thing to say. ~Robert Brault, rbrault.blogspot.com",
"I will not play at tug o\' war\nI\'d rather play at hug o\' war,\nWhere everyone hugs\nInstead of tugs....\n~Shel Silverstein",
"A hug is a handshake from the heart.  ~Author Unknown",
"You can\'t give a hug without getting a hug.  ~Author Unknown",
"A hug delights and warms and charms,\nthat must be why God gave us arms.\n~Author Unknown",
"Hugs are the universal medicine. ~Author Unknown",
"Have you hugged someone your appreciation today? ~Terri Guillemets",
"A hug is a great gift — one size fits all, and it\'s easy to exchange. ~Author Unknown",
"Happiness is an unexpected hug.  ~Author Unknown",
"A kiss without a hug is like a flower without the fragrance.  ~Proverb",
"...A hug is an amazing thing\nIt\'s just the perfect way\nTo show the love we\'re feeling\nBut can\'t find the words to say....\n~Johnny Ray Ryder, Jr., \"A Simple Hug\"",
"If you\'re angry at a loved one, hug that person. And mean it. You may not want to hug — which is all the more reason to do so. It\'s hard to stay angry when someone shows they love you, and that\'s precisely what happens when we hug each other. ~Walter Anderson, The Confidence Course, 1997",
"A hug lasts long after they let go. ~Author Unknown",
"Hugs grease the wheels of the world.  ~Author Unknown",
"Your hugs and kisses are like the stars that light up my life when things get dark.  ~Author Unknown",
"A hug is worth a thousand words.  ~Author Unknown",
"Every time I think of you, it is like getting a hug from the inside out. ~Author Unknown",
"Her companion made no reply save to press her arm closer... ~Florence Bone (1875–1971), The Morning of To‑Day, 1907",
"Be a love pharmacist: dispense hugs like medicine — they are! ~Terri Guillemets",
"Have you hugged yourself today? ~Anonymous",
"We will have two kinds of dessert. Hugs and kisses from mamma, and hugs and kisses from papa... ~Jay Benson Hamilton, \"How Santa Claus Made One Dollar Hold Out,\" 1891",
"A hug is two hearts wrapped in arms. ~Author Unknown",
"I don\'t discriminate — I\'m an equal-opportunity hugger. ~Author Unknown",
"Hugging has no unpleasant side effects and is all natural.  There are no batteries to replace, it\'s inflation-proof and non-fattening with no monthly payments.  It\'s non-taxable, non-polluting, and is, of course, fully refundable.  ~Author Unknown",
"[H]ugs don\'t need new equipment,\nSpecial batteries or parts -\nJust open up your arms\nAnd open up your hearts.\n~Johnny Ray Ryder, Jr., \"A Simple Hug\"",
"Giggle until you cry\nHug without asking why\n~Terri Guillemets",
"A hug is like a bandage to a hurting wound. ~Author Unknown",
"A hug is a smile with arms, a laugh with a stronger grip. ~Terri Guillemets",
"Never wait until tomorrow to hug someone you could hug today,\nbecause when you give one, you get one right back your way.\n~Author Unknown",
"Sometimes it\'s better to put love into hugs than to put it into words.  ~Author Unknown",
"A hug is the shortest distance between friends.  ~Author Unknown"
    ]);

var compliments =shuffle(  
[
"You’re that “Nothing” when people ask me what I’m thinking about.",
"You look great today.",
"You’re a smart cookie.",
"I bet you make babies smile.",
"You have impeccable manners.",
"I like your style.",
"You have the best laugh.",
"I appreciate you.",
"You are the most perfect you there is.",
"Our system of inside jokes is so advanced that only you and I get it. And I like that.",
"You’re strong.",
"Your perspective is refreshing.",
"You’re an awesome friend.",
"You light up the room.",
"You deserve a hug right now.",
"You should be proud of yourself.",
"You’re more helpful than you realize.",
"You have a great sense of humor.",
"You’ve got all the right moves!",
"Is that your picture next to “charming” in the dictionary?",
"Your kindness is a balm to all who encounter it.",
"On a scale from 1 to 10, you’re an 11.",
"You are brave.",
"You’re even more beautiful on the inside than you are on the outside.",
"You have the courage of your convictions.",
"Aside from food. You’re my favorite.",
"If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.",
"You are making a difference.",
"You’re like sunshine on a rainy day.",
"You bring out the best in other people.",
"You’re a great listener.",
"Everything would be better if more people were like you!",
"You were cool way before hipsters were cool.",
"That color is perfect on you.",
"Hanging out with you is always a blast.",
"You always know — and say — exactly what I need to hear when I need to hear it.",
"You may dance like no one’s watching, but everyone’s watching because you’re an amazing dancer!",
"Being around you makes everything better!",
"When you say, “I meant to do that,” I totally believe you.",
"When you’re not afraid to be yourself is when you’re most incredible.",
"Colors seem brighter when you’re around.",
"You’re more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
"That thing you don’t like about yourself is what makes you so interesting.",
"You’re wonderful.",
"Jokes are funnier when you tell them.",
"You’re better than a triple-scoop ice cream cone. With sprinkles.",
"Your hair looks stunning.",
"You’re one of a kind!",
"You’re inspiring.",
"If you were a box of crayons, you’d be the giant name-brand one with the built-in sharpener.",
"You should be thanked more often. So thank you!!",
"Our community is better because you’re in it.",
"Someone is getting through something hard right now because you’ve got their back.",
"You have the best ideas.",
"You always know how to find that silver lining.",
"Everyone gets knocked down sometimes, but you always get back up and keep going.",
"You’re a candle in the darkness.",
"You’re a great example to others.",
"Being around you is like being on a happy little vacation.",
"You always know just what to say.",
"You’re always learning new things and trying to better yourself, which is awesome.",
"If someone based an Internet meme on you, it would have impeccable grammar.",
"You could survive a Zombie apocalypse.",
"You’re more fun than bubble wrap.",
"When you make a mistake, you fix it.",
"Who raised you? They deserve a medal for a job well done.",
"You’re great at figuring stuff out.",
"Your voice is magnificent.",
"The people you love are lucky to have you in their lives.",
"You’re like a breath of fresh air.",
"You’re gorgeous — and that’s the least interesting thing about you, too.",
"You’re so thoughtful.",
"Your creative potential seems limitless.",
"You’re the coolest person I know. And I consider myself bet friends with like all celebrities, so. . . .",
"You’re irresistible when you blush.",
"Actions speak louder than words, and yours tell an incredible story.",
"Somehow you make time stop and fly at the same time.",
"When you make up your mind about something, nothing stands in your way.",
"You seem to really know who you are.",
"Any team would be lucky to have you on it.",
"In high school I bet you were voted “most likely to keep being awesome.”",
"I bet you do the crossword puzzle in ink.",
"Babies and small animals probably love you.",
"There’s ordinary, and then there’s you.",
"You’re someone’s reason to smile.",
"You’re even better than a unicorn, because you’re real.",
"How do you keep being so funny and making everyone laugh?",
"You have a good head on your shoulders.",
"Has anyone ever told you that you have great posture?",
"The way you treasure your loved ones is incredible.",
"You’re really something special.",
"You’re a gift to those around you.",
]);

var rudebritishisms = 
[
"Bollocks: technically means \"balls,\" but often describes something seen as extremely negative or lacking in value; e.g. \"total shit.\"",
"\"Bugger off!\": \"Go away!\" or \"Leave me alone!\" (Note: Bugger, used on its own, is akin to \"Fuck!\" or \"Shit!\")",
"Crusty Dragon: a piece of snot or booger.",
"\"Get stuffed!\": \"Beat it\" or \"Scram!\"",
"John Thomas: penis.",
"Pavement Pizza: euphemism for puke or vomit.",
"See A Man About a Dog: what you say as an excuse for leaving, in order to hide your destination; also, to excuse oneself to take a giant shit.",
"Starkers: completely naked.",
"Stonker: a boner.",
"Sweet Fanny Adams: code for \"Sweet fuck all\", meaning little to nothing at all. (Example: \"I thought I had a chance with her, but I ended up with Sweet Fanny Adams.)",
"Taking The Piss: messing or screwing around.",
"Tosh: total bullshit, nonsense or rubbish.",
"\"Who blew off?\": \"Who farted?\"",
"Todger: another word for \"dick.\"",
"Gagging: desperately need or want something",
"Slap And Tickle: making out or heavy petting.",
"Snookered: to be in a bad situation, totally fucked or otherwise without a paddle."
]

var britishisms = 
["Any road: used in place of \"any way,\" primarily used in the north of Britain.",
"Baccy: shortened word for \"tobacco;\" also, \"wacky backy\" means marijuana.",
"Bits ‘n Bobs: various things. (Example: \"My mother has a lot of Bits ‘n Bobs around the house.\")",
"\"Bob’s your uncle!\": \"There you go! You’ve got it!\"",
"Chav: white trash.",
"Cheeky: to be not respectful of something, having a flippant or facetious attitude.",
"Chin Wag: to have a chat with someone.",
"Collywobbles: extreme queasiness or stomach pain brought on by stress, nervousness or anxiety.",
"Dog’s Bollocks: extremely good or favorable, great",
"Dog’s Dinner: to be dressed nicely or look dapper.",
"Donkey’s Years: ages, as in \"I haven’t seen you in ages!\"",
"Fall Arse Over Tit: to have an embarrassing fall or to topple over.",
"The Full Monty: going all the way with it, going big instead of going home.",
"Gobby: loudly opinionated, offensive or prickish. (See: Donald Trump.)",
"Gobsmacked: amazed or awed by something.",
"Gormless: completely clueless, like Alicia Silverstone in the 90s film.",
"To Have A Butcher’s: to take a look at something or someone.",
"Her Majesty’s Pleasure: being incarcerated or put in prison.",
"\"I’m Off To Bedfordshire!\": \"I’m hitting the hay!\"",
"\"It’s Monkeys Outside!\": \"Wow, it’s very cold out!\"",
"Knackered: phrase meaning \"extremely tired,\" often uttered after a long, exhausting day; also see: \"zonked.\"",
"Knees Up: A term for a mixer or a dance party (Example: \"I went to this wild knees up this weekend. I wish you could have been there.\")",
"Legless: totally, completely hammered.",
"Lurgy: sick or under the weather.",
"Minted: to be extremely rich.",
"\"Pip pip!\": archaic, out-of-use phrase used to say goodbye.",
"Plonk: a pejorative word used to describe red wine of poor quality, usually purchased at little expensive.",
"Ponce: a poser.",
"Porkies: old Cockney rhyming word used to mean \"lies.\" (Example: If one is \"telling porkies,\" you’re telling lies.) Comes from \"pork pies,\" which rhymes with lies.",
"Puff: a fart.",
"Shambolic: in a total state of bedlam, chaos or dismay.",
"Shirty: ill-tempered, insolent.",
"Spend A Penny: to use the restroom.",
"Throw A Spanner In The Works: to make a mistake or fuck up something.",
"Tickety-Boo: phrase for when everything’s going great (Example: \"All is tickety-boo in my world.\")",
"Blimey: expressing surprise",
"Fancy: like",
"Fortnight: two Weeks",
"Dodgy: suspicious",
"Wonky: not right",
"Tad: little bit",
"One Off: one time only ",
"Chips: french fries ",
"Lush: good looking, attractive",
"Tidy: gorgeous, perfect",
"Alright?: 'hey, how are you?'",
"Chuffed to bits: very pleased",
"Bodge: to mend or repair something clumsily",
"Mate: life partner or a dear friend, commonly used term of endearment and affection",
"Ace: brilliant, excellent",
"Have a gander/goosey: relates to the way a goose cranes its neck to look at something",
"Hunky-Dory: a situation is okay, cool, normal",
"Jammy: extremely lucky",
"Proper: very, extremely ",
"Scrummy: mouth-wateringly good",
"Sick: cool",
"Keep calm and carry on: WW2 slogan to remain stoic throughout the Blitzkrieg. Useful slogan for a zombie apocolapse!",
"Mind the gap: to look where you are going",
"Bants: to joke or exchange witty remarks with others ",
"Ledge: exaggeration to make things and people sound more important, often for doing something great or incredible ",
"Cracking: particularly good or excellent"
];

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});


var request = require('request');
var mailList = []
var mailInx = 0
var mailChannel = 0
var reservedUser 
var beRude = true
var nicknames = {}

function getNicknames(members){
    var nicknames = {};

    for (var m in members) {
        var member = channel.members[m];
        var propVal;
        nicknames[member.user_id] = member.nick;

    }
    return nicknames;
}
function arrayRemove(arr, value){
    return arr.filter(function(ele){
        return ele != value;
    });
}

function getRandList(n, maxNumber)
{
    var list = []
    for (var i = 0; i < n; i++)
    {
        list.push(randomRangeInt(0,maxNumber));
    }
    return list;
}
function getGiphy(tag, callback)
{
    request('https://api.giphy.com/v1/gifs/random?api_key=n4v6OL0wOMGe4NwN2nqZmZ4rkoKUEqTe&tag='+tag+'&rating=G', function(error, response, body)
    {
        obj = JSON.parse(body)
        console.log(obj["data"]["url"])
        callback(obj["data"]["url"])
    })

}

function randomRangeInt(min, max)
{
    return Math.floor(Math.random()*(max-min))+min
}
function handleStretch()
{
     console.log("handling mail")
    if(mailList.length > 0)
    {
        bot.sendMessage({to:mailChannel,
            message: "<:stretch3:630598269663445042> Hey Runners, this is your 4-ish hour reminder, Get a quick stretch in to keep limber!"})
    }
    //Send mail every 15 to 45 mins.
    setTimeout(handleMail,2*60*60*1000)
}

function handleMail()
{
    console.log("handling mail")
    if(mailList.length > 0)
    {
        bot.sendMessage({to:mailChannel,
            message: "<:wurlycurlys:621598386780504084> Hey Runners, this is your 4-ish hour reminder, make sure to get a little running fuel in you!"})
    }
    //Send mail every 15 to 45 mins.
    setTimeout(handleStretch,2*60*60*1000)
}


function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


function corruptString(string)
{
    swapList = getRandList(randomRangeInt(2,14)*2, (string.length))
    console.log(swapList)
    var tmpString = string;
    for(var i = 0; i < swapList.length; i+=2)
    {
        var tmp = tmpString[swapList[i]]
        tmpString = setCharAt(string,swapList[i],tmpString[swapList[i+1]])
        tmpString = setCharAt(string,swapList[i+1],tmp)
    }
    return zalgo(tmpString);
}
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    var channels = bot.servers;
    for (var c in channels) {
        nicknames[c] = {};
        for (var m in channels[c].members) {
            var member = channels[c].members[m];
            logger.info(member)
            var propVal;
            if(member.nick)
                nicknames[c][member.id] = member.nick
        }
    }
    setInterval(updateSam, 10*1000*60);
    
   
});


var food = 100
var love = 100
var tired = 0


function StringBuilder() {
    this._array = [];
    this._index = 0;
}

StringBuilder.prototype.append = function (str) {
    this._array[this._index] = str;
    this._index++;
}

StringBuilder.prototype.toString = function () {
    return this._array.join('');
}

function getPctBar(percentage, messageLength)
{
    console.log(percentage)
    var arr = new Array(messageLength)
    var filled = Math.floor(messageLength * percentage)
    var rest = messageLength - filled
    for(var i = 0; i < filled; i++)
    {
        arr[i] = '█'
    }
    for(var i = filled; i < messageLength; i++)
    {
        arr[i] = '░'
    }
    return "[" + arr.join('') + "]"

}

function updateSam()
{
    food = Math.max(0, food-5);
    love = Math.max(0, love-7);
    tired = Math.min(100, tired + 2);
}

function judgeSam()
{
    //Happy = 80%
    //Medium = 30-80
    //Sad = 0-30
    var foodPrecentage = food/100.0
    var lovePercentage = love/100.0
    var tiredPercentage = (100-tired)/100.0
    var score = (foodPrecentage+lovePercentage+tiredPercentage)/3
    if(score > .7)
        return "<:samh:615034505161605140> Sam's feeling great!"
    else if(score > .3)
        return "<:samb:680665016483184674>"
    else
        return "<:sams:622680591959064606> Sam's Looking Grey!"

}

function printSamValues(bot, channelID)
{
    var foodPrecentage = food/100.0
    var lovePercentage = love/100.0
    var tiredPercentage = tired/100.0
    bot.sendMessage({
                    to: channelID,
                    message: judgeSam() + "\n" +
                             getPctBar(foodPrecentage, 20) + " :  Food\n" +
                             getPctBar(lovePercentage, 20) + " :  Love\n" + 
                             getPctBar(tiredPercentage, 20) + " :  Tiredness"

                });

}

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
     if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];     
        var serverId = bot.channels[channelID].guild_id
        var userName;
        if(userID in nicknames[serverId]){
            userName = nicknames[serverId][userID];
        }
        else
        {
            userName = user;
        }
        console.log(cmd)
        switch(cmd) {
            case '.':
                console.log(channelID)
                break;
            // !ping
            efault:
                break;
            case 'slang':
                var words = britishisms;
                if (beRude)
                {

                    words = words.concat(rudebritishisms);
                }
                bot.sendMessage({
                    to: channelID,
                    message: '<:samh:615034505161605140> Some british slang for you, mate! ' + words[Math.floor(Math.random()*words.length)]
                });
                break;
            case 'compliment':
            
              bot.sendMessage({
                    to: channelID,
                    message: '<:samh:615034505161605140> ' + userName + ', ' + compliments[complimentsIdx]
                });
                complimentsIdx = (complimentsIdx+1)%compliments.length;
                break;
            case 'bang':
                bot.sendMessage({
                        to: channelID,
                        message: '*dies in a chemichal fire*'
                });
                break;
            case 'mail':
                if(mailList.includes(user)){
                    bot.sendMessage({
                        to: channelID,
                        message:'Got it, ' + userName + ", I'll hold the mail."
                    })
                    var tmp = arrayRemove(mailList,user)
                    console.log(tmp)
                    mailList = tmp;
                }
                else
                {
                    bot.sendMessage({
                        to :channelID,
                        message: 'Got it, ' + userName + ", I'll send you mail time to time!"

                    });
                    mailList.push(user)
                }

                break;
            case 'mailInit':
                bot.sendMessage({
                    to: channelID,
                    message : " Beep boop mail initted"
                })
                mailChannel = channelID
                setTimeout(handleMail,0)
                break;
            case 'slap':
                if(beRude)
                {
                    bot.sendMessage({
                        to: channelID,
                        message : " S'pose I earned that..."
                    })
                    beRude = false;
                    //Disable being rude for 15 minutes.
                    setTimeout(function(){beRude = true} ,15*3600*1000);
                }
                else
                {
                    bot.sendMessage({
                        to: channelID,
                        message : " Well, now you're just being mean!"
                    })
                }
                break;
            case 'hug':
               getGiphy('hug', function(gif){
                    bot.sendMessage({
                        to: channelID,
                        message: gif + '\n' + hugs[hugsIdx]
                    })
                    hugsIdx = (hugsIdx + 1) % hugs.length;
                })
                break;
            case 'gates':
                    bot.sendMessage({
                        to: channelID,
                        message: "<:samh:615034505161605140> Raise the Gates! <:samh:615034505161605140>"
                    })
                break;
            case 'kiss':
                    bot.sendMessage({
                        to: channelID,
                        message: "<:samb:680665016483184674>"
                    })
                    var kiss = function(){
                        bot.sendMessage({
                            to:channelID,
                            message:"<:samh:615034505161605140>"
                        })
                    }
                    setTimeout(kiss, 2500);
                break;
            case '||kiss||':
                bot.sendMessage({
                            to: channelID,
                            message: "||<:samb:680665016483184674>||"
                        })
                        var kiss = function(){
                            bot.sendMessage({
                                to:channelID,
                                message:"||<:samh:615034505161605140>||"
                            })
                        }
                        setTimeout(kiss, 2500);
                        break;
            case '||fuck||':
                bot.sendMessage({
                            to: channelID,
                            message: "||<:D8:622673115188690944>||"
                        })
                        var kiss = function(){
                            bot.sendMessage({
                                to:channelID,
                                message:"||no||"
                            })
                        }
                        setTimeout(kiss, 2500);
                        break;
            case '<:wurlycurlys:621598386780504084>':
                bot.sendMessage({
                            to:channelID,
                            message:"<:samh:615034505161605140> <:wurlycurlys:621598386780504084> Thanks for the bite!"
                        })
                food = Math.min(100, food+20);

                printSamValues(bot, channelID);
                break;
            case 'chat':
                bot.sendMessage({
                            to:channelID,
                            message:"<:samh:615034505161605140> Good to hear from you too! <3"
                        })
                love = Math.min(100,love+20);
                printSamValues(bot, channelID);
                break;
            case 'nap':
                bot.sendMessage({
                            to:channelID,
                            message:"<:samh:615034505161605140> A nap sounds wonderful!"
                        })
                tired = Math.max(0, tired-50);
                printSamValues(bot, channelID);
                break;

            case 'check':
                printSamValues(bot,channelID);
                break;

            // Just add any case commands if you want to..
         
     }
 }
});