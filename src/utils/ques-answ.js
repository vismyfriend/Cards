const questions = {
    'Who does what at what time': [
        {
            id: 1,
            ru: "	пить пиво	",
            eng: "	drink beer /бир/	"
        },
        {
            id: 2,
            ru: "	мыть полы	",
            eng: "	wash the floor	"
        },
        {
            id: 3,
            ru: "	готовить еду	",
            eng: "	cook food	"
        },
        {
            id: 4,
            ru: "	целовать иностранца	",
            eng: "	kiss a foreigner	"
        },
        {
            id: 5,
            ru: "	купить ноутбук	",
            eng: "	buy a laptop	"
        },
        {
            id: 6,
            ru: "	петь в душе	",
            eng: "	sing in the shower /шАуэ/	"
        },
        {
            id: 7,
            ru: "	делать домашку	",
            eng: "	do homework	"
        },
        {
            id: 8,
            ru: "	спать	",
            eng: "	sleep	"
        },
        {
            id: 9,
            ru: "	танцевать на столе	",
            eng: "	dance on the table	"
        },
        {
            id: 10,
            ru: "	курить	",
            eng: "	smoke	"
        },
        {
            id: 11,
            ru: "	усердно работать	",
            eng: "	work hard	"
        },
        {
            id: 12,
            ru: "	отдыхать	",
            eng: "	relax /рилЭкс/	"
        },
        {
            id: 13,
            ru: "	смотреть телефвизор	",
            eng: "	watch TV	"
        },
        {
            id: 14,
            ru: "	играть в игры	",
            eng: "	play video games	"
        },
        {
            id: 15,
            ru: "	болтать по телефону	",
            eng: "	chat on the phone	"
        },
        {
            id: 16,
            ru: "	играть в баскетбол	",
            eng: "	play basketball	"
        },
        {
            id: 17,
            ru: "	играть в покер	",
            eng: "	play poker	"
        },
        {
            id: 18,
            ru: "	играть в нстольные игры	",
            eng: "	play board games	"
        },
        {
            id: 19,
            ru: "	чистить зубы	",
            eng: "	clean teeth	"
        },
        {
            id: 20,
            ru: "	ездить, кататься на велике	",
            eng: "	ride a bicycle /бАйсикл/ 	"
        },
        {
            id: 21,
            ru: "	резать хлеб	",
            eng: "	cut bread	"
        },
        {
            id: 22,
            ru: "	покупать молоко	",
            eng: "	buy milk	"
        },
        {
            id: 23,
            ru: "	выучить что-то новое	",
            eng: "	learn something new	"
        },
        {
            id: 24,
            ru: "	ползать под столом	",
            eng: "	creep under the table	"
        },
        {
            id: 25,
            ru: "	иметь дела с хулиганами	",
            eng: "	deal with hooligans	"
        },
        {
            id: 26,
            ru: "	нарушать обещания	",
            eng: "	break promises	"
        },
        {
            id: 27,
            ru: "	бесить Винсента	",
            eng: "	annoy Vincent	"
        },
        {
            id: 28,
            ru: "	ловить бабочек	",
            eng: "	catch butterfles	"
        },
        {
            id: 29,
            ru: "	нарисовать романтичную картинку	",
            eng: "	draw romantic pictures	"
        },
        {
            id: 30,
            ru: "	 рисовать грязные картинки	",
            eng: "	draw dirty pictures	"
        },
        {
            id: 31,
            ru: "	бить детей	",
            eng: "	beat children	"
        },
        {
            id: 32,
            ru: "	становиться умным	",
            eng: "	become smart	"
        },
        {
            id: 33,
            ru: "	становиться богатым	",
            eng: "	become rich	"
        },
        {
            id: 34,
            ru: "	начинать квн	",
            eng: "	begin KVN	"
        },
        {
            id: 35,
            ru: "	начинать курить	",
            eng: "	begin to smoke	"
        },
        {
            id: 36,
            ru: "	надуть красный шарик	",
            eng: "	blow a red balloon	"
        },
        {
            id: 37,
            ru: "	надуть синий шарик	",
            eng: "	blow a blue balloon	"
        },
        {
            id: 38,
            ru: "	осторить дом	",
            eng: "	build a house	"
        },
        {
            id: 39,
            ru: "	построить робота	",
            eng: "	build a robot	"
        },
        {
            id: 40,
            ru: "	сжигать калории	",
            eng: "	burn calories	"
        },
        {
            id: 41,
            ru: "	сжигать жир	",
            eng: "	burn fat	"
        },
        {
            id: 42,
            ru: "	купить машину	",
            eng: "	buy a car	"
        },
        {
            id: 43,
            ru: "	куить квартиру	",
            eng: "	buy an apartment	"
        },
        {
            id: 44,
            ru: "	принести бутерброд	",
            eng: "	bring a sandwich	"
        },
        {
            id: 45,
            ru: "	возвращаться домой	",
            eng: "	come home	"
        },
        {
            id: 46,
            ru: "	выбирать новую одежду	",
            eng: "	choose new clothes	"
        },
        {
            id: 47,
            ru: "	копать картошку	",
            eng: "	dig potatoes	"
        },
        {
            id: 48,
            ru: "	делать что-то классное	",
            eng: "	do something cool	"
        },
        {
            id: 49,
            ru: "	ехать в /ДИЗНИ/ лэнд	",
            eng: "	drive to Disneyland	"
        },
        {
            id: 50,
            ru: "	пить тЭкилу	",
            eng: "	drink Tequila	"
        },
        {
            id: 51,
            ru: "	есть луковый суп	",
            eng: "	eat onion soup	"
        },
        {
            id: 52,
            ru: "	держать для меня дверь	",
            eng: "	hold a door for me	"
        },
        {
            id: 53,
            ru: "	причинять боль чьему-то сердцу	",
            eng: "	hurt sombody's heart	"
        },
        {
            id: 54,
            ru: "	скрывать правду	",
            eng: "	hide the truth	"
        },
        {
            id: 55,
            ru: "	прятаться под кроватью	",
            eng: "	hide under the bed	"
        },
        {
            id: 56,
            ru: "	слышать какие-то шумы	",
            eng: "	hear some noises	"
        },
        {
            id: 57,
            ru: "	будет встреча по работе	",
            eng: "	have a work meeting	"
        },
        {
            id: 58,
            ru: "	выращивать овощи	",
            eng: "	grow vegetables	"
        },
        {
            id: 59,
            ru: "	получить много денег	",
            eng: "	get a lot of money	"
        },
        {
            id: 60,
            ru: "	пойти в спортзал	",
            eng: "	go to the GYM	"
        },
        {
            id: 61,
            ru: "	найти деньги на улице	",
            eng: "	find money in the street	"
        },
    ],
    'How often do you': [
        {
            id: 1,
            ru: "	пить воду	",
            eng: "	drink water	"
        },
        {
            id: 2,
            ru: "	мыть машину	",
            eng: "	wash your car	"
        },
        {
            id: 3,
            ru: "	готовить омлет	",
            eng: "	make an omelete	"
        },
        {
            id: 4,
            ru: "	целоваться	",
            eng: "	kiss	"
        },
        {
            id: 5,
            ru: "	обниматься	",
            eng: "	hug	"
        },
        {
            id: 6,
            ru: "	петь в душе	",
            eng: "	sing in the shower /шАуэ/	"
        },
        {
            id: 7,
            ru: "	делать домашку	",
            eng: "	do homework	"
        },
        {
            id: 8,
            ru: "	спать	",
            eng: "	sleep	"
        },
        {
            id: 9,
            ru: "	танцевать на столе	",
            eng: "	dance on the table	"
        },
        {
            id: 10,
            ru: "	курить	",
            eng: "	smoke	"
        },
        {
            id: 11,
            ru: "	усердно работать	",
            eng: "	work hard	"
        },
        {
            id: 12,
            ru: "	отдыхать	",
            eng: "	relax /рилЭкс/	"
        },
        {
            id: 13,
            ru: "	смотреть телефвизор	",
            eng: "	watch TV	"
        },
        {
            id: 14,
            ru: "	играть в игры	",
            eng: "	play video games	"
        },
        {
            id: 15,
            ru: "	болтать по телефону	",
            eng: "	chat on the phone	"
        },
        {
            id: 16,
            ru: "	играть в баскетбол	",
            eng: "	play basketball	"
        },
        {
            id: 17,
            ru: "	играть в покер	",
            eng: "	play poker	"
        },
        {
            id: 18,
            ru: "	играть в нстольные игры	",
            eng: "	play board games	"
        },
        {
            id: 19,
            ru: "	чистить зубы	",
            eng: "	clean teeth	"
        },
        {
            id: 20,
            ru: "	ездить, кататься на велике	",
            eng: "	ride a bicycle /бАйсикл/ 	"
        }
    ],
    'Test': [
        {
            id: 1,
            ru: "	пить пиво	",
            eng: "	drink beer /бир/	"
        }
    ]
}
const answers = {
    'Who does what at what time': [
        {
            id: 101,
            ru: "	at 13:15	",
            eng: "	Vincent	"
        },
        {
            id: 102,
            ru: "	at 15:13	",
            eng: "	Vincent and his wife	"
        },
        {
            id: 103,
            ru: "	at 12:20	",
            eng: "	Vincnetn's cat	"
        },
        {
            id: 104,
            ru: "	at 20:12	",
            eng: "	your boyfriend	"
        },
        {
            id: 105,
            ru: "	at 18:30	",
            eng: "	a taxi driver	"
        },
        {
            id: 106,
            ru: "	At 13:13	",
            eng: "	a street dog	"
        },
        {
            id: 107,
            ru: "	At 13:30	",
            eng: "	your doctor	"
        },
        {
            id: 108,
            ru: "	At 13:45	",
            eng: "	a police officer	"
        },
        {
            id: 109,
            ru: "	at 22:22	",
            eng: "	a fireman	"
        },
        {
            id: 110,
            ru: "	at 23:23	",
            eng: "	a cook	"
        },
        {
            id: 111,
            ru: "	at 20:44	",
            eng: "	your granny	"
        },
        {
            id: 112,
            ru: "	at 23:59	",
            eng: "	your grandpa	"
        },
        {
            id: 113,
            ru: "	at 14:30	",
            eng: "	We	"
        },
        {
            id: 114,
            ru: "	At 15:30	",
            eng: "	you	"
        },
        {
            id: 115,
            ru: "	At 14:40	",
            eng: "	I	"
        },
        {
            id: 116,
            ru: "	At 7:11	",
            eng: "	Brad Pitt	"
        },
        {
            id: 117,
            ru: "	At 21:18	",
            eng: "	your best friend	"
        },
        {
            id: 118,
            ru: "	at 19:18	",
            eng: "	your friends	"
        },
        {
            id: 119,
            ru: "	at 18:19	",
            eng: "	you and Vincent	"
        },
        {
            id: 120,
            ru: "	at 12:34	",
            eng: "	your boss	"
        },
        {
            id: 121,
            ru: "	at 11:11	",
            eng: "	my mom	"
        },
        {
            id: 122,
            ru: "	at 12:12	",
            eng: "	my dad	"
        },
        {
            id: 123,
            ru: "	at 13:59	",
            eng: "	my child	"
        },
        {
            id: 124,
            ru: "	at 14:14	",
            eng: "	my children	"
        },
        {
            id: 125,
            ru: "	at 14:44	",
            eng: "	my dog	"
        },
        {
            id: 126,
            ru: "	at 15:50	",
            eng: "	my friend	"
        },
        {
            id: 127,
            ru: "	at 15:14	",
            eng: "	my girlfriend	"
        },
        {
            id: 128,
            ru: "	at 15:15	",
            eng: "	my wife	"
        },
        {
            id: 129,
            ru: "	at 15:59	",
            eng: "	my sister	"
        },
        {
            id: 130,
            ru: "	at 16:16	",
            eng: "	my aunt	"
        },
        {
            id: 131,
            ru: "	at 17:39	",
            eng: "	my uncle	"
        },
        {
            id: 132,
            ru: "	at 17:49	",
            eng: "	my mother in law	"
        },
        {
            id: 133,
            ru: "	at 18:18	",
            eng: "	my father in law	"
        },
        {
            id: 134,
            ru: "	at 18:19	",
            eng: "	my personal driver	"
        },
        {
            id: 135,
            ru: "	at 18:12	",
            eng: "	my doctor	"
        },
        {
            id: 136,
            ru: "	at 19:20	",
            eng: "	a teacher	"
        },
        {
            id: 137,
            ru: "	at 19:39	",
            eng: "	the best teacher in the world	"
        },
        {
            id: 138,
            ru: "	at 20:20	",
            eng: "	a bum	"
        },
        {
            id: 139,
            ru: "	at 20:21	",
            eng: "	bums	"
        },
        {
            id: 140,
            ru: "	at 20:33	",
            eng: "	a snake	"
        },
        {
            id: 141,
            ru: "	at 21:20	",
            eng: "	Arnold Shwarzenegger	"
        },
        {
            id: 142,
            ru: "	at 21:21	",
            eng: "	Instasamka	"
        },
        {
            id: 143,
            ru: "	at 20:11	",
            eng: "	Kirkorov Phil	"
        },
        {
            id: 144,
            ru: "	at 21:58	",
            eng: "	Pugacheva Alla	"
        },
        {
            id: 145,
            ru: "	at 22:20	",
            eng: "	somebody	"
        },
        {
            id: 146,
            ru: "	at 22:12	",
            eng: "	nobody	"
        },
        {
            id: 147,
            ru: "	at 22:44	",
            eng: "	my friends	"
        },
        {
            id: 148,
            ru: "	at 22:44	",
            eng: "	someone	"
        },
        {
            id: 149,
            ru: "	at 23:23	",
            eng: "	my parents	"
        },
        {
            id: 150,
            ru: "	at 23:12	",
            eng: "	my grandma	"
        },
        {
            id: 151,
            ru: "	at 23:22	",
            eng: "	my grandpa	"
        },
        {
            id: 152,
            ru: "	at 23:34	",
            eng: "	my cat	"
        },
        {
            id: 153,
            ru: "	at 23:44	",
            eng: "	an elephant	"
        },
        {
            id: 154,
            ru: "	at 23:49	",
            eng: "	a gorilla	"
        },
        {
            id: 155,
            ru: "	at 23:45	",
            eng: "	Tarzan	"
        },
        {
            id: 156,
            ru: "	at 23:15	",
            eng: "	Tom and Jerry	"
        },
        {
            id: 157,
            ru: "	at 23:50	",
            eng: "	All people	"
        },
        {
            id: 158,
            ru: "	at 23:58	",
            eng: "	Everybody	"
        },
        {
            id: 159,
            ru: "	at 23:59	",
            eng: "	an ugly fat girl	"
        },
        {
            id: 160,
            ru: "	at midnight 00:00 am	",
            eng: "	an ugly fat boy	"
        },
        {
            id: 161,
            ru: "	in the afternoon 12:00 pm	",
            eng: "	an elephant	"
        }
    ],
    'How often do you': [
        {
            id: 101,
            ru: "	каждый день	",
            eng: "	every day	"
        },
        {
            id: 102,
            ru: "	всегда	",
            eng: "	always	"
        },
        {
            id: 103,
            ru: "	иногда	",
            eng: "	sometimes	"
        },
        {
            id: 104,
            ru: "	никогда	",
            eng: "	never	"
        },
        {
            id: 105,
            ru: "	не часто	",
            eng: "	not often	"
        },
        {
            id: 106,
            ru: "	очень часто	",
            eng: "	very often	"
        },
        {
            id: 107,
            ru: "	не очень часто	",
            eng: "	not very often	"
        },
        {
            id: 108,
            ru: "	от времени к времени	",
            eng: "	from time to time	"
        },
        {
            id: 109,
            ru: "	когда мне грустно	",
            eng: "	when I am sad	"
        },
        {
            id: 110,
            ru: "	когда я пьян	",
            eng: "	When I am drunk	"
        },
        {
            id: 111,
            ru: "	когда я счастлив	",
            eng: "	when I am happy	"
        },
        {
            id: 112,
            ru: "	каждую неделю	",
            eng: "	every week	"
        },
        {
            id: 113,
            ru: "	два раза в год	",
            eng: "	two times a year	"
        },
        {
            id: 114,
            ru: "	два раза в день	",
            eng: "	two times a day	"
        },
        {
            id: 115,
            ru: "	три раза в день	",
            eng: "	three times a day	"
        },
        {
            id: 116,
            ru: "	раз каждую ночь	",
            eng: "	every night	"
        },
        {
            id: 117,
            ru: "	один раз в год	",
            eng: "	once a year	"
        },
        {
            id: 118,
            ru: "	редко	",
            eng: "	rarely /рЭэли/	"
        },
        {
            id: 119,
            ru: "	каждый раз, когда я вижу Винсента	",
            eng: "	Every time when I see Vincent	"
        },
        {
            id: 120,
            ru: "	дважды в месяц	",
            eng: "	twice a month	"
        }
    ],
    'Test': [
        {
            id: 1,
            ru: "	пить2 пиво2	",
            eng: "	drink2 beer2 /бир/	"
        }
    ]
}
export { questions, answers }