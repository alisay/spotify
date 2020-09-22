const dictionary = [
        {
                "emotions": ['abhor', 'abhorrence', 'abhorrent', 'abominably', 'abominate', 'abomination', 'admired', 'admirable', 'admirably', 'admiration', 'admire', 'adorably', 'adoration', 'adoring', 'affect', 'affection', 'affection', 'affectionate', 'affectionateness', 'affective', 'affright', 'afraid', 'aggravate', 'aggravated', 'aggravation', 'aggress', 'aggression', 'aggressive', 'aggressiveness', 'aggrieved', 'aggrieve', 'alarm', 'alarmed', 'alert', 'amatory', 'amaze', 'amazed', 'amazement', 'amazing', 'amazingly', 'amicability', 'amicable', 'amicableness', 'amicably', 'amok', 'amour', 'amorous', 'amorousness', 'amuck', 'anger', 'angered', 'angrily', 'angry', 'animosity', 'animus', 'annoy', 'annoyance', 'annoyed', 'annoying', 'antagonised', 'antagonism', 'anticipate', 'anticipation', 'anxious', 'anxiously', 'appalled', 'appreciated', 'apprehension', 'apprehensive', 'apprehensively', 'apprehensiveness', 'probative', 'approbatory', 'approval', 'approve', 'approved', 'approving', 'ardour', 'ardour', 'astonish', 'astonished', 'astonishing', 'astonishingly', 'astonishment', 'astound', 'astounded', 'astounding', 'atrocious', 'attach', 'attachment', 'attrite', 'attrition', 'avaricious', 'avid', 'avidity', 'avidness', 'awe', 'awed', 'awestricken', 'awestruck', 'awful', 'awfully', 'bad', 'blood', 'temp', 'temper', 'baffle', 'baffled', 'balk', 'balked', 'bang', 'banter', 'barrack', 'bash', 'bashfully', 'on cloud nine', 'beam', 'beaming', 'beat', 'charmed', 'bedevil', 'begrudged', 'begrudge', 'begrudging', 'beguile', 'beguiled', 'belligerence', 'belligerency', 'belligerent', 'belligerently', 'belong', 'belonging', 'beneficed', 'beneficence', 'beneficent', 'beneficially', 'benevolence', 'benevolent', 'benevolently', 'bereave', 'bereaved', 'bereft', 'besot', 'build', 'bewilder', 'bewitch', 'bewitching', 'bitter', 'bitterness', 'blithe', 'blithely', 'blitheness', 'blue', 'blue devil', 'bode', 'boding', 'Bonheur', 'bore', 'bored', 'bother', 'bothersome', 'bothersome', 'broken-hearted', 'broken heartedness', 'brood', 'brother', 'brotherhood', 'brotherly', 'brother like', 'brotherly', 'browbeaten', 'bully', 'bullied', 'buoyancy', 'buoyancy', 'calf love', 'captive', 'captivate', 'captivated', 'captivating', 'captivation', 'captor', 'capture', 'care', 'carefree', 'carefree', 'carefreeness', 'caring', 'cast down', 'catch', 'chafe', 'chaff', 'charge', 'charge', 'charity', 'charitable', 'charm', 'charmed', 'cheer', 'cheer up', 'cheerful', 'cheerfully', 'cheerfulness', 'cheery', 'cheering', 'cheerless', 'cheerlessly', 'cheerlessness', 'cheery', 'chill', 'chilling', 'chirp', 'choler', 'choleric', 'churn', 'class feel', 'cliff-hang', 'cliff-hanging', 'close', 'closeness', 'cold-hearted', 'cold-heartedness', 'comfort', 'comfortable', 'comfortableness', 'comfortably', 'comforting', 'commend', 'commendable', 'compact', 'compatibility', 'compatible', 'compatibly', 'compact', 'complacence', 'complacency', 'complacent', 'compact', 'compunction', 'concern', 'congratulate', 'congratulate', 'consul', 'console', 'concern', 'consternation', 'contemn', 'content', 'contented', 'contentment', 'contrite', 'contrite', 'contritely', 'contriteness', 'contrition', 'covet', 'covetous', 'covetously', 'covetousness', 'cow', 'cowed', 'cower', 'crawl', 'creep', 'creeps', 'cringe', 'cringe', 'crucify', 'crucify', 'cruel', 'cruelly', 'cruelly', 'cruelty', 'cruelty', 'crush', 'dander', 'dark', 'dash', 'daunt', 'daze', 'dazed', 'deject', 'delight', 'delighted', 'demur', 'demoralise', 'demoralising', 'demoralization', 'demoralize', 'demoralized', 'demoralizing', 'deplore', 'deplorable', 'deplorably', 'depress', 'depressed', 'depressing', 'depression', 'depressive', 'despoil', 'desolate', 'desolation', 'despair', 'despairingly', 'despise', 'disposal', 'despise', 'despising', 'despite', 'despiteful', 'despond', 'despondence', 'despondency', 'despondent', 'despondently', 'detest', 'detestable', 'detestably', 'detestation', 'devil', 'divot', 'devoted', 'devotedness', 'devotion', 'doffed', 'diffidence', 'diffident', 'diffidently', 'dingy', 'dingy', 'dire', 'direful', 'disconsolate', 'disconsolate', 'disconsolateness', 'discourage', 'discouraged', 'disdain', 'disgust', 'disgusted', 'disgustedly', 'disgustful', 'disgusting', 'disgustingly', 'dishearten', 'disheartened', 'disheartening', 'dismal', 'dismay', 'dispirit', 'dispirited', 'dispiritedness', 'dispiriting', 'displease', 'displease', 'displeased', 'displeasing', 'displeasingly', 'displeasure', 'displeasure', 'distaste', 'distasteful', 'distastefully', 'distress', 'distressed', 'dole', 'doleful', 'dolefully', 'dolefulness', 'dolour', 'dolorous', 'dolour', 'dolorous', 'down', 'downcast', 'downhearted', 'downhearted', 'downheartedness', 'downtrodden', 'drab', 'dread', 'dreaded', 'dreadful', 'dreadfully', 'drear', 'dreary', 'dreary', 'dudgeon', 'dumbfound', 'dumbfounded', 'dumfound', 'dumfounded', 'dun', 'disport', 'dysphonia', 'dysphonic', 'eager', 'eagerly', 'eagerness', 'bully', 'ebullient', 'ebulliently', 'lean', 'elite', 'elate', 'elated', 'elating', 'elation', 'embolden', 'emote', 'emotive', 'empathy', 'empathetic', 'empathetic', 'empathetically', 'empathy', 'empathic', 'empathy', 'enamour', 'enamoured', 'enamour', 'enchant', 'enchanting', 'enchantment', 'endear', 'endearingly', 'endure', 'infuriate', 'enjoy', 'enmity', 'enmity', 'enrage', 'enraged', 'enragement', 'enthral', 'enthralled', 'enthralling', 'enthrallment', 'enthusiasm', 'enthusiast', 'enthusiastic', 'enthusiastically', 'entrance', 'entrance', 'entranced', 'entrancing', 'envy', 'enviable', 'enviable', 'enviably', 'envious', 'enviously', 'enviousness', 'envy', 'esteem', 'euphoria', 'euphoria', 'euphoria', 'euphoria', 'euphoric', 'evil', 'exacerbate', 'exacerbate', 'exalt', 'exasperate', 'exasperate', 'exasperating', 'exasperation', 'excite', 'excitement', 'exciting', 'exact', 'execrable', 'execrate', 'execration', 'exhilarate', 'exhilarate', 'exhilarated', 'exhilarating', 'exhilaration', 'exhort', 'expanse', 'expansively', 'expect', 'expectancy', 'exuberant', 'exuberance', 'exuberant', 'exuberantly', 'exult', 'exultant', 'exultantly', 'exultation', 'exulting', 'exultingly', 'fancy', 'fancy', 'fantast', 'fantastic', 'fascia', 'fascinate', 'fascinating', 'fascination', 'favour', 'favourable', 'favourably', 'favour', 'favourable', 'favourably', 'fawn', 'fear', 'fearful', 'fearfully', 'fearfulness', 'fearsome', 'fearsome', 'fed', 'feeling', 'fellow', 'festal', 'festive', 'festive', 'fit', 'flabbergast', 'flabbergasted', 'flummox', 'flush', 'fond', 'fondly', 'fondness', 'forebode', 'foreboding', 'forlorn', 'forlornly', 'forlornness', 'foul', 'frater', 'fraternal', 'friend', 'friendly', 'friendliness', 'friendly', 'fright', 'frighten', 'frighten away', 'frighten off', 'frightened', 'frightening', 'frighteningly', 'frightful', 'frustrate', 'frustrate', 'frustrated', 'frustrating', 'frustration', 'fulfil', 'fulfil', 'fulfilment', 'fulfilment', 'fury', 'furious', 'furiously', 'fury', 'gaiety', 'gaiety', 'gala', 'gall', 'galling', 'gay', 'gaily', 'gaily', 'get', 'get at', 'get down', 'get to', 'giving protection', 'glad', 'gladden', 'gladdened', 'gleefulness', 'gladness', 'gladsome', 'gladsome', 'gladsomeness', 'glee', 'gleeful', 'gleefully', 'gleefully', 'gleefulness', 'gloat', 'gloating', 'gloatingly', 'gloom', 'gleeful', 'gloomy', 'gloomily', 'gloomily', 'gloominess', 'glooming', 'gloomy', 'glum', 'godforsaken', 'good', 'goodwill', 'goodwill', 'grabby', 'grabby', 'grasp', 'grasping', 'gratify', 'gratify', 'gratifying', 'gratifyingly', 'gravel', 'great', 'greedy', 'greedy', 'green-eye', 'green-eyed', 'grief', 'grief-stricken', 'grieve', 'grievance', 'grievance', 'grieve', 'grieving', 'grievous', 'grievously', 'grim', 'grizzly', 'grizzle', 'grovel', 'grudge', 'grudge', 'grudging', 'guilt', 'guilty', 'guilty', 'gusto', 'hackle', 'hackles', 'hangdog', 'hapless', 'happily', 'happiness', 'happy', 'harass', 'harassed', 'harassment', 'hardhearted', 'hardhearted', 'hardheartedness', 'harried', 'harried', 'hate', 'hateful', 'hatefully', 'hart', 'hatred', 'heart', 'heartache', 'heartache', 'heartbreak', 'heartbreaking', 'heartburn', 'heartburning', 'hearten', 'heartless', 'heartlessly', 'heartlessness', 'heartened', 'heartrending', 'heartsick', 'heartsickness', 'heavyhearted', 'heavyhearted', 'heavyheartedness', 'helpless', 'helplessness', 'hero', 'heist', 'hesitance', 'hesitancy', 'hesitantly', 'hesitatingly', 'hideous', 'hideously', 'high', 'high-spirit', 'high-spirited', 'hear', 'hilarity', 'hilarious', 'hilariously', 'hilarity', 'horned', 'horrendous', 'horrible', 'horrible', 'horribly', 'horrid', 'horridly', 'horrify', 'horrify', 'horrific', 'horrified', 'horrify', 'horrifying', 'horrifyingly', 'horror', 'horror-stricken', 'horror-struck', 'hostel', 'hostile', 'hostilely', 'hostility', 'howl', 'howling', 'huffy', 'huffily', 'huffily', 'huffiness', 'huffish', 'huffishness', 'huffy', 'shyster', 'hysteria', 'hysterical', 'hysterically', 'identify', 'identify', 'identification', 'identify', 'ill', 'impress', 'incense', 'incense', 'incensed', 'indigo', 'indignant', 'indignantly', 'indignation', 'inflate', 'infatuation', 'inure', 'infuriate', 'infuriated', 'infuriating', 'infuriation', 'insource', 'insouciance', 'inspire', 'inspire', 'interest', 'intimacy', 'intimacy', 'in timid', 'intimidate', 'intimidated', 'intimidation', 'into', 'intoxicate', 'iris', 'irascibility', 'irascible', 'ire', 'irrupt', 'irritate', 'irritated', 'irritating', 'irritation', 'jealous', 'jealousy', 'jealously', 'jealousy', 'jocular', 'jocularity', 'jocund', 'jocundity', 'jolly', 'jollity', 'jollity', 'jolly', 'jovial', 'joviality', 'joy', 'joyful', 'joyfully', 'joyfulness', 'joyless', 'joylessly', 'joylessness', 'joyous', 'joyously', 'joyousness', 'jubilee', 'jubilance', 'jubilancy', 'jubilant', 'jubilantly', 'jubilee', 'jubilation', 'jump', 'keen', 'keenness', 'kick', 'kid', 'kind', 'kindheart', 'kindhearted', 'kindheartedness', 'kindly', 'lachrymose', 'lachrymose', 'laden', 'lament', 'lamentably', 'laudable', 'laudably', 'lift', 'light-hearted', 'light-heartedness', 'lightsome', 'lightsomeness', 'likable', 'likable', 'like', 'likeable', 'likeable', 'liking', 'live', 'livid', 'lucidity', 'lividly', 'loath', 'loathe', 'loathing', 'loathly', 'loathsome', 'loathsome', 'lonely', 'loneliness', 'long-face', 'long-faced', 'look', 'loran', 'love', 'lonesome', 'lonesome', 'loving', 'lovingly', 'lovingness', 'low', 'low-spirit', 'low-spirited', 'low-spiritedness', 'loyalty', 'loyalty', 'mad', 'madden', 'maddened', 'maddening', 'madness', 'male', 'malefic', 'maleficence', 'malevolent', 'malevolence', 'malevolent', 'malevolently', 'malic', 'malice', 'malice', 'malicious', 'maliciously', 'maliciousness', 'malign', 'malignity', 'marvel', 'marvellously', 'marvellous', 'marvellously', 'melancholy', 'melancholy', 'melancholic', 'melancholy', 'merciless', 'mercilessness', 'merry', 'merrily', 'merrily', 'merriment', 'merry', 'mirth', 'mirthful', 'mirthfully', 'mirthfulness', 'misanthrope', 'misanthrope', 'misanthropic', 'misanthropically', 'misanthropy', 'miser', 'miserable', 'miserably', 'misery', 'misfortune', 'misfortunate', 'misocainea', 'misogami', 'misogamy', 'misogyny', 'misogyny', 'misogynist', 'misogynist', 'misogyny', 'misology', 'misology', 'mason', 'misoneism', 'misopedia', 'monstrous', 'monstrously', 'mourn', 'mournful', 'mournfully', 'mournfulness', 'mourning', 'move', 'murder', 'murderously', 'murderousness', 'mystify', 'mystify', 'nark', 'nausea', 'nauseate', 'nauseate', 'nauseated', 'nauseating', 'nauseous', 'near', 'nettle', 'nettle', 'nettled', 'nettlesome', 'nettlesome', 'nigh', 'noisome', 'noisome', 'nonplus', 'obscene', 'obscene', 'occupy', 'occupy', 'odious', 'odiously', 'odium', 'offend', 'offense', 'offense', 'offensive', 'offering', 'oppress', 'oppressed', 'oppression', 'oppressive', 'oppressively', 'oppressiveness', 'outrage', 'outrage', 'outraged', 'outrageous', 'overeat', 'overjealous', 'pall', 'panic', 'panic-stricken', 'panic-struck', 'panicky', 'panicked', 'panicky', 'panicky', 'partial', 'partiality', 'pathetic', 'pathetic', 'peeve', 'peeved', 'penance', 'penance', 'penchant', 'pewit', 'penitence', 'penitent', 'penitent', 'penitential', 'penitently', 'pep', 'perky', 'perkiness', 'perplex', 'persecute', 'persecute', 'persecuted', 'pesky', 'pesky', 'pester', 'pestered', 'pestering', 'pastier', 'pestiferous', 'pick', 'pique', 'pique', 'piss', 'pissed', 'piteous', 'pity', 'pitiable', 'pitiable', 'pitiful', 'pitiless', 'pitilessness', 'pitying', 'plague', 'plaguy', 'plaintive', 'plaintive', 'plaintively', 'plaintiveness', 'pleas', 'pleased', 'pleasing', 'poor', 'pout', 'praiseworthily', 'praiseworthily', 'predilection', 'predilection', 'preen', 'prefer', 'preference', 'prehensile', 'prehensile', 'Premont', 'premonition', 'presage', 'presage', 'present', 'presentiment', 'pride', 'prideful', 'protect', 'protective', 'protectively', 'protectiveness', 'proud', 'proudly', 'provoke', 'provoked', 'puppy', 'puzzle', 'puzzle', 'queasy', 'queasy', 'quick', 'rag', 'rage', 'rancour', 'rancour', 'rapport', 'rattle', 'rattling', 'recreate', 'recreate', 'regard', 'regret', 'regretful', 'rejoice', 'rejoice', 'rejoicing', 'relish', 'remorse', 'remorse', 'remorseful', 'remorsefully', 'repel', 'repellent', 'repellent', 'repent', 'repentance', 'repentant', 'repentantly', 'rehung', 'repugnance', 'repugnant', 'repulse', 'repulse', 'repulsion', 'repulsive', 'repulsively', 'resent', 'resentful', 'resentfully', 'resentment', 'respect', 'revel', 'revenge', 'revengefully', 'revolt', 'revolting', 'revoltingly', 'revels', 'revulsion', 'rile', 'riled', 'riotous', 'riotously', 'roil', 'roiled', 'roman', 'romantic', 'rue', 'rueful', 'ruefully', 'ruefully', 'ruefulness', 'rush', 'Ruth', 'truthfulness', 'ruthless', 'ruthlessness', 'sad', 'sadden', 'saddening', 'sadly', 'sadness', 'satiable', 'satiable', 'satisfaction', 'satisfaction', 'satisfactory', 'satisfactorily', 'satisfactorily', 'satisfactory', 'satisfy', 'satisfiable', 'satisfied', 'satisfy', 'satisfying', 'satisfyingly', 'scare', 'scared', 'scary', 'scare', 'scarily', 'scarily', 'scary', 'scene', 'schadenfreud', 'schadenfreude', 'score', 'scorn', 'scream', 'screaming', 'see', 'self-compact', 'self-complacency', 'self-distrust', 'self-doubt', 'self-pity', 'self-pity', 'self-reproach', 'self-satisfaction', 'self-satisfaction', 'self-satisfy', 'self-satisfied', 'shadow', 'shame', 'shamed', 'shamefaced', 'shamefaced', 'she', 'shivery', 'shivery', 'short', 'shuddery', 'shuddery', 'shy', 'shyly', 'shyly', 'shyness', 'sick', 'sicken', 'sickening', 'sickeningly', 'sickish', 'smug', 'smugness', 'soft', 'soft-boil', 'soft-boiled', 'soft heart', 'soft-hearted', 'softheartedness', 'solace', 'solace', 'sombre', 'sombreness', 'sooth', 'soothe', 'sore', 'sorry', 'sorrow', 'sorrowful', 'sorrowfully', 'sorrowfulness', 'sorrowing', 'sorry', 'spite', 'spiteful', 'spitefulness', 'spleen', 'stage', 'stagger', 'staggering', 'stew', 'stimuli', 'stimulating', 'strike', 'stun', 'stung', 'stunned', 'stupefactive', 'stupefaction', 'stupefy', 'stupefied', 'stupefy', 'stupefying', 'stupid', 'stupefy', 'stupefy', 'suffer', 'suffering', 'sulk', 'sulky', 'sulkiness', 'sulky', 'Sunni', 'sunny', 'superbly', 'superbly', 'surprise', 'surprise', 'surprised', 'surprised', 'surprising', 'surprisingly', 'suspense', 'suspense', 'suspenseful', 'suspense', 'sympathetic', 'sympathetic', 'sympathetically', 'sympathy', 'sympathy', 'tantalum', 'tantalize', 'tantrum', 'tats', 'taste', 'tear', 'tearful', 'tearfulness', 'teas', 'teased', 'teasing', 'tender', 'tenderness', 'terrible', 'terrible', 'terrif', 'terrify', 'terrific', 'terrifically', 'terrified', 'terror', 'the', 'thirstily', 'thirstily', 'thrill', 'thunderstruck', 'tickle', 'tickle', 'timid', 'timidity', 'timidly', 'timidness', 'Timor', 'timorous', 'timorously', 'timorousness', 'tired', 'titi', 'titillate', 'titillated', 'titillating', 'titillation', 'together', 'togetherness', 'top', 'hopingly', 'torment', 'trance', 'trance', 'tremens', 'tremendous', 'trepid', 'trepidation', 'tepidly', 'triumph', 'triumphal', 'triumphant', 'triumphantly', 'trounce', 'trounce', 'turn', 'tyranny', 'tyrannical', 'tyrannous', 'ugly', 'ugly', 'umbrage', 'umbrage', 'umbrageous', 'unassertive', 'unassertive', 'unassertively', 'unassertiveness', 'uncheer', 'uncheerful', 'uncheerfulness', 'uneasily', 'uneasily', 'unhappy', 'unhappiness', 'unhappy', 'unkind', 'unsure', 'unsure', 'unworried', 'unworried', 'uplift', 'uproar', 'uproarious', 'uproariously', 'urge', 'urge', 'vang', 'vengefully', 'vengefulness', 'venom', 'vex', 'vexed', 'vexation', 'vexation', 'vexatious', 'vexed', 'vexing', 'vile', 'indict', 'vindictive', 'vindictively', 'vindictiveness', 'walk', 'wallow', 'warm', 'warm heart', 'warm-hearted', 'warm-heartedness', 'warmth', 'warpath', 'weak', 'weakness', 'weep', 'weepy', 'weepiness', 'weeping', 'weight', 'Weltschmerz', 'wick', 'wicked', 'with', 'woe', 'woebegone', 'woebegone', 'woeful', 'woefully', 'woefully', 'woefulness', 'wonder', 'wonderful', 'wonderfully', 'wonderment', 'wondrous', 'wondrously', 'world-weary', 'world-weariness', 'world-weary', 'worry', 'worry', 'worship', 'worshipful', 'wrath', 'wrathful', 'wrathfully', 'wretch', 'wretched', 'wroth', 'wrathful', 'yucky', 'zeal', 'zealous', 'zest', 'zestfulness']
        }
]


module.exports = {
        dictionary
      }
      