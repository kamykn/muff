import { wazf } from "./wazf";

function main() {
	console.log(wazf)
	console.log(wordlist)

	wazfSample = new wazfSample(wazf);
	wazfSample.wazf.setReturnListLength(20);
	wazfSample.wazf.setSearchWordList(wordlist);

	wazfSample.setForm();
	wazfSample.setToggle();
}

class wazfSample {
	constructor (wazf) {
		this.wazf = wazf
	}

	setToggle() {
		document.getElementById("change-wordlist").addEventListener('click', () => {
			let switcher = false;
			(() => {
				console.log('switched');
				switcher = !switcher
				if (switcher) {
					this.wazf.setWordList(wordlistJP, 20);
				} else {
					this.wazf.setWordList(wordlist, 20);
				}
			})();
		});
	}

	setForm() {
		document.getElementById("wasm-fzf").addEventListener('keyup', () => {
			const value = document.getElementById("wasm-fzf").value;

			const startTime = performance.now(); // 開始時間

			const result = this.wazf.search(value);

			const endTime = performance.now(); // 終了時間
			console.log(endTime - startTime); // 何ミリ秒かかったかを表示する

			const $resultField = document.getElementById('result-field');
			const $resultFieldWord = document.getElementsByClassName('result-field-li');

			if ($resultFieldWord.length > 0) {
				let len = $resultFieldWord.length;
				for (let $i = 0; $i < len; $i++) {
					// 要素が減っていくため0個目を削除
					$resultField.removeChild($resultFieldWord[0]);
				}
			}

			result.list.forEach((word) => {
				let $li = document.createElement('li');
				$li.classList.add('result-field-li');
				let wordNode = document.createTextNode(word);
				$li.appendChild(wordNode);
				$resultField.appendChild($li); // fragmentの追加する
			});
		});
	}
}

let wordlistJP = [
'こんにちは',
'さようなら',
'ごきげんよう',
'またあした',
'おやすみなさい',
'いただきます',
'いってきます',
'ただいま',
'ohayo',
'こんniちWa',
];

let wordlist = [
'the',
'be',
'and',
'of',
'to',
'a',
'in',
'have',
'it',
'you',
'he',
'for',
'they',
'not',
'that',
'we',
'on',
'with',
'this',
'i',
'do',
'as',
'at',
'she',
'but',
'from',
'by',
'will',
'or',
'say',
'go',
'so',
'all',
'if',
'one',
'would',
'about',
'can',
'which',
'there',
'know',
'more',
'get',
'who',
'like',
'when',
'think',
'make',
'time',
'see',
'what',
'up',
'some',
'other',
'out',
'good',
'people',
'year',
'take',
'no',
'well',
'because',
'very',
'just',
'come',
'could',
'work',
'use',
'than',
'now',
'then',
'also',
'into',
'only',
'look',
'want',
'give',
'first',
'new',
'way',
'find',
'over',
'any',
'after',
'day',
'where',
'thing',
'most',
'should',
'need',
'much',
'right',
'how',
'back',
'mean',
'even',
'may',
'here',
'many',
'such',
'last',
'child',
'tell',
'really',
'call',
'before',
'company',
'through',
'down',
'show',
'life',
'man',
'change',
'place',
'long',
'between',
'feel',
'too',
'still',
'problem',
'write',
'same',
'lot',
'great',
'try',
'leave',
'number',
'both',
'own',
'part',
'point',
'little',
'help',
'ask',
'meet',
'start',
'talk',
'something',
'put',
'another',
'become',
'interest',
'country',
'old',
'each',
'school',
'late',
'high',
'different',
'off',
'next',
'end',
'live',
'why',
'while',
'world',
'week',
'play',
'might',
'must',
'home',
'never',
'include',
'course',
'house',
'report',
'group',
'case',
'woman',
'around',
'book',
'family',
'seem',
'let',
'again',
'kind',
'keep',
'hear',
'system',
'every',
'question',
'during',
'always',
'big',
'set',
'small',
'study',
'follow',
'begin',
'important',
'since',
'run',
'under',
'turn',
'few',
'bring',
'early',
'hand',
'state',
'move',
'money',
'fact',
'however',
'area',
'provide',
'name',
'read',
'friend',
'month',
'large',
'business',
'without',
'information',
'open',
'order',
'government',
'word',
'issue',
'market',
'pay',
'build',
'hold',
'service',
'against',
'believe',
'second',
'though',
'yes',
'love',
'increase',
'job',
'plan',
'result',
'away',
'example',
'happen',
'offer',
'young',
'close',
'program',
'lead',
'buy',
'understand',
'thank',
'far',
'today',
'hour',
'student',
'face',
'hope',
'idea',
'cost',
'less',
'room',
'until',
'reason',
'form',
'spend',
'head',
'car',
'learn',
'level',
'person',
'experience',
'once',
'member',
'enough',
'bad',
'city',
'night',
'able',
'support',
'whether',
'line',
'present',
'side',
'quite',
'although',
'sure',
'term',
'least',
'age',
'low',
'speak',
'within',
'process',
'public',
'often',
'train',
'possible',
'actually',
'rather',
'view',
'together',
'consider',
'price',
'parent',
'hard',
'party',
'local',
'control',
'already',
'concern',
'product',
'lose',
'story',
'almost',
'continue',
'stand',
'whole',
'yet',
'rate',
'care',
'expect',
'effect',
'sort',
'ever',
'anything',
'cause',
'fall',
'deal',
'water',
'send',
'allow',
'soon',
'watch',
'base',
'probably',
'suggest',
'past',
'power',
'test',
'visit',
'center',
'grow',
'nothing',
'return',
'mother',
'walk',
'matter',
'mind',
'value',
'office',
'record',
'stay',
'force',
'stop',
'several',
'light',
'develop',
'remember',
'bit',
'share',
'real',
'answer',
'sit',
'figure',
'letter',
'decide',
'language',
'subject',
'class',
'development',
'town',
'half',
'minute',
'food',
'break',
'clear',
'future',
'either',
'ago',
'per',
'remain',
'top',
'among',
'win',
'color',
'involve',
'reach',
'social',
'period',
'across',
'note',
'history',
'create',
'drive',
'along',
'type',
'sound',
'eye',
'music',
'game',
'political',
'free',
'receive',
'moment',
'sale',
'policy',
'further',
'body',
'require',
'wait',
'general',
'appear',
'toward',
'team',
'easy',
'individual',
'full',
'black',
'sense',
'perhaps',
'add',
'rule',
'pass',
'produce',
'sell',
'short',
'agree',
'law',
'everything',
'research',
'cover',
'paper',
'position',
'near',
'human',
'computer',
'situation',
'staff',
'activity',
'film',
'morning',
'war',
'account',
'shop',
'major',
'someone',
'above',
'design',
'event',
'special',
'sometimes',
'condition',
'carry',
'choose',
'father',
'decision',
'table',
'certain',
'forward',
'main',
'die',
'bear',
'cut',
'describe',
'himself',
'available',
'especially',
'strong',
'rise',
'girl',
'maybe',
'community',
'else',
'particular',
'role',
'join',
'difficult',
'please',
'detail',
'difference',
'action',
'health',
'eat',
'step',
'true',
'phone',
'themselves',
'draw',
'white',
'date',
'practice',
'model',
'raise',
'customer',
'front',
'explain',
'door',
'outside',
'behind',
'economic',
'site',
'approach',
'teacher',
'land',
'charge',
'finally',
'sign',
'claim',
'relationship',
'travel',
'enjoy',
'death',
'nice',
'amount',
'improve',
'picture',
'boy',
'regard',
'organization',
'happy',
'couple',
'act',
'range',
'quality',
'project',
'round',
'opportunity',
'road',
'accord',
'list',
'wish',
'therefore',
'wear',
'fund',
'rest',
'kid',
'industry',
'education',
'measure',
'kill',
'serve',
'likely',
'certainly',
'national',
'itself',
'teach',
'field',
'security',
'air',
'benefit',
'trade',
'risk',
'news',
'standard',
'vote',
'percent',
'focus',
'stage',
'space',
'instead',
'realize',
'usually',
'data',
'single',
'address',
'performance',
'chance',
'accept',
'society',
'technology',
'mention',
'choice',
'save',
'common',
'culture',
'total',
'demand',
'material',
'limit',
'listen',
'due',
'wrong',
'foot',
'effort',
'attention',
'upon',
'check',
'complete',
'lie',
'pick',
'reduce',
'personal',
'ground',
'animal',
'arrive',
'patient',
'current',
'century',
'evidence',
'exist',
'similar',
'fight',
'leader',
'fine',
'street',
'former',
'contact',
'particularly',
'wife',
'sport',
'prepare',
'discuss',
'response',
'voice',
'piece',
'finish',
'suppose',
'apply',
'president',
'fire',
'compare',
'court',
'police',
'store',
'poor',
'knowledge',
'laugh',
'arm',
'heart',
'source',
'employee',
'manage',
'simply',
'bank',
'firm',
'cell',
'article',
'fast',
'attack',
'foreign',
'surprise',
'feature',
'factor',
'pretty',
'recently',
'affect',
'drop',
'recent',
'relate',
'official',
'financial',
'miss',
'art',
'campaign',
'private',
'pause',
'everyone',
'forget',
'page',
'worry',
'summer',
'drink',
'opinion',
'park',
'represent',
'key',
'inside',
'manager',
'international',
'contain',
'notice',
'wonder',
'nature',
'structure',
'section',
'myself',
'exactly',
'plant',
'paint',
'worker',
'press',
'whatever',
'necessary',
'region',
'growth',
'evening',
'influence',
'respect',
'various',
'catch',
'thus',
'skill',
'attempt',
'son',
'simple',
'medium',
'average',
'stock',
'management',
'character',
'bed',
'hit',
'establish',
'indeed',
'final',
'economy',
'fit',
'guy',
'function',
'yesterday',
'image',
'size',
'behavior',
'addition',
'determine',
'station',
'population',
'fail',
'environment',
'production',
'contract',
'player',
'comment',
'enter',
'occur',
'alone',
'significant',
'drug',
'wall',
'series',
'direct',
'success',
'tomorrow',
'director',
'clearly',
'lack',
'review',
'depend',
'race',
'recognize',
'window',
'purpose',
'department',
'gain',
'tree',
'college',
'argue',
'board',
'holiday',
'mark',
'church',
'machine',
'achieve',
'item',
'prove',
'cent',
'season',
'floor',
'stuff',
'wide',
'anyone',
'method',
'analysis',
'election',
'military',
'hotel',
'club',
'below',
'movie',
'doctor',
'discussion',
'sorry',
'challenge',
'nation',
'nearly',
'statement',
'link',
'despite',
'introduce',
'advantage',
'ready',
'marry',
'strike',
'mile',
'seek',
'ability',
'unit',
'card',
'hospital',
'quickly',
'interview',
'agreement',
'release',
'tax',
'solution',
'capital',
'popular',
'specific',
'beautiful',
'fear',
'aim',
'television',
'serious',
'target',
'degree',
'pull',
'red',
'husband',
'access',
'movement',
'treat',
'identify',
'loss',
'shall',
'modern',
'pressure',
'bus',
'treatment',
'yourself',
'supply',
'village',
'worth',
'natural',
'express',
'indicate',
'attend',
'brother',
'investment',
'score',
'organize',
'trip',
'beyond',
'sleep',
'fish',
'promise',
'potential',
'energy',
'trouble',
'relation',
'touch',
'file',
'middle',
'bar',
'suffer',
'strategy',
'deep',
'except',
'clean',
'tend',
'advance',
'fill',
'star',
'network',
'generally',
'operation',
'match',
'avoid',
'seat',
'throw',
'task',
'normal',
'goal',
'associate',
'blue',
'positive',
'option',
'box',
'huge',
'message',
'instance',
'style',
'refer',
'cold',
'push',
'quarter',
'assume',
'baby',
'successful',
'sing',
'doubt',
'competition',
'theory',
'propose',
'reference',
'argument',
'adult',
'fly',
'document',
'pattern',
'application',
'hot',
'obviously',
'unclear',
'bill',
'search',
'separate',
'central',
'career',
'anyway',
'speech',
'dog',
'officer',
'throughout',
'oil',
'dress',
'profit',
'guess',
'fun',
'protect',
'resource',
'science',
'disease',
'balance',
'damage',
'basis',
'author',
'basic',
'encourage',
'hair',
'male',
'operate',
'reflect',
'exercise',
'useful',
'restaurant',
'income',
'property',
'previous',
'dark',
'imagine',
'okay',
'earn',
'daughter',
'post',
'newspaper',
'define',
'conclusion',
'clock',
'everybody',
'weekend',
'perform',
'professional',
'mine',
'debate',
'memory',
'green',
'song',
'object',
'maintain',
'credit',
'ring',
'discover',
'dead',
'afternoon',
'prefer',
'extend',
'possibility',
'direction',
'facility',
'variety',
'daily',
'clothes',
'screen',
'track',
'dance',
'completely',
'female',
'responsibility',
'original',
'sister',
'rock',
'dream',
'nor',
'university',
'easily',
'agency',
'dollar',
'garden',
'fix',
'ahead',
'cross',
'yeah',
'weight',
'legal',
'proposal',
'version',
'conversation',
'somebody',
'pound',
'magazine',
'shape',
'sea',
'immediately',
'welcome',
'smile',
'communication',
'agent',
'traditional',
'replace',
'judge',
'herself',
'suddenly',
'generation',
'estimate',
'favorite',
'difficulty',
'purchase',
'shoot',
'announce',
'unless',
'independent',
'recommend',
'survey',
'majority',
'stick',
'request',
'rich',
'wind',
'none',
'exchange',
'budget',
'famous',
'blood',
'appropriate',
'block',
'warm',
'count',
'scene',
'writer',
'content',
'prevent',
'safe',
'invite',
'mix',
'element',
'effective',
'correct',
'medical',
'admit',
'beat',
'telephone',
'copy',
'committee',
'aware',
'advice',
'handle',
'glass',
'trial',
'stress',
'radio',
'administration',
'complex',
'text',
'context',
'ride',
'directly',
'heavy',
'remove',
'conduct',
'equipment',
'otherwise',
'title',
'extra',
'executive',
'chair',
'expensive',
'sample',
'sex',
'deliver',
'video',
'connection',
'primary',
'weather',
'collect',
'inform',
'principle',
'straight',
'appeal',
'highly',
'trust',
'wonderful',
'flat',
'absolutely',
'flow',
'fair',
'additional',
'responsible',
'farm',
'collection',
'hang',
'negative',
'band',
'relative',
'tour',
'alternative',
'software',
'pair',
'ship',
'attitude',
'cheap',
'double',
'leg',
'observe',
'sentence',
'print',
'progress',
'truth',
'nobody',
'examine',
'lay',
'speed',
'politics',
'reply',
'display',
'transfer',
'perfect',
'slightly',
'overall',
'intend',
'user',
'respond',
'dinner',
'slow',
'regular',
'physical',
'apart',
'suit',
'federal',
'reveal',
'percentage',
'peace',
'status',
'crime',
'decline',
'decade',
'launch',
'warn',
'consumer',
'favor',
'dry',
'partner',
'institution',
'spot',
'horse',
'eventually',
'heat',
'excite',
'reader',
'importance',
'distance',
'guide',
'grant',
'taxi',
'feed',
'pain',
'sector',
'mistake',
'ensure',
'satisfy',
'chief',
'cool',
'expert',
'wave',
'south',
'labor',
'surface',
'library',
'excellent',
'edge',
'camp',
'audience',
'lift',
'procedure',
'email',
'global',
'struggle',
'advertise',
'select',
'surround',
'extent',
'river',
'annual',
'fully',
'contrast',
'roll',
'reality',
'photograph',
'artist',
'conflict',
'entire',
'presence',
'crowd',
'corner',
'gas',
'shift',
'net',
'category',
'secretary',
'defense',
'quick',
'cook',
'spread',
'nuclear',
'scale',
'driver',
'ball',
'cry',
'introduction',
'requirement',
'north',
'confirm',
'senior',
'photo',
'refuse',
'transport',
'emerge',
'map',
'concept',
'island',
'reform',
'neither',
'football',
'survive',
'flight',
'left',
'solve',
'neighbor',
'background',
'technique',
'traffic',
'improvement',
'tool',
'consequence',
'circumstance',
'smoke',
'reaction',
'rain',
'busy',
'lesson',
'brain',
'mass',
'funny',
'contribute',
'failure',
'schedule',
'speaker',
'bottom',
'adopt',
'combine',
'mountain',
'waste',
'hide',
'marriage',
'ticket',
'meal',
'colleague',
'bag',
'repeat',
'equal',
'expression',
'plus',
'extremely',
'owner',
'plane',
'commercial',
'lady',
'duty',
'strength',
'connect',
'cultural',
'arrange',
'scheme',
'payment',
'unfortunately',
'brief',
'bird',
'demonstrate',
'contribution',
'appreciate',
'chapter',
'secret',
'apparently',
'novel',
'union',
'burn',
'trend',
'initial',
'pleasure',
'suggestion',
'critical',
'gather',
'mostly',
'earth',
'pop',
'essential',
'desire',
'promote',
'currently',
'employ',
'path',
'topic',
'beach',
'attract',
'engage',
'powerful',
'flower',
'crisis',
'settle',
'boat',
'aid',
'fan',
'kitchen',
'twice',
'fresh',
'delay',
'safety',
'engineer',
'quiet',
'insurance',
'nurse',
'divide',
'length',
'investigation',
'package',
'somewhere',
'expand',
'commit',
'obvious',
'jump',
'weapon',
'relatively',
'host',
'winter',
'district',
'broad',
'tire',
'spring',
'spirit',
'lunch',
'actual',
'pool',
'battle',
'tradition',
'cash',
'hardly',
'award',
'coach',
'experiment',
'consideration',
'strange',
'code',
'possibly',
'threat',
'accident',
'impossible',
'revenue',
'enable',
'afraid',
'active',
'conclude',
'religious',
'cancer',
'convince',
'vary',
'environmental',
'sun',
'healthy',
'blow',
'volume',
'location',
'invest',
'proceed',
'wash',
'actor',
'glad',
'tape',
'whereas',
'opposite',
'stone',
'sum',
'murder',
'monitor',
'soldier',
'finance',
'hate',
'egg',
'concert',
'shock',
'comfortable',
'usual',
'carefully',
'pack',
'recall',
'wine',
'camera',
'swim',
'manufacture',
'theater',
'cycle',
'coffee',
'totally',
'museum',
'visitor',
'freedom',
'construction',
'dear',
'objective',
'moreover',
'onto',
'historical',
'oppose',
'branch',
'vehicle',
'scientist',
'route',
'bind',
'belong',
'taste',
'tonight',
'fashion',
'danger',
'bomb',
'army',
'dangerous',
'decrease',
'hurt',
'council',
'editor',
'normally',
'sight',
'generate',
'gift',
'delivery',
'deny',
'guest',
'anybody',
'bedroom',
'quote',
'climb',
'basically',
'violence',
'minister',
'mainly',
'mouth',
'noise',
'manner',
'gun',
'square',
'occasion',
'familiar',
'ignore',
'destroy',
'affair',
'civil',
'locate',
'citizen',
'temperature',
'gold',
'domestic',
'load',
'belief',
'troop',
'technical',
'remind',
'arrangement',
'skin',
'prison',
'switch',
'acquire',
'corporate',
'fairly',
'wood',
'participate',
'tough',
'tear',
'representative',
'capacity',
'border',
'shake',
'assessment',
'shoe',
'ought',
'ad',
'fee',
'hall',
'regulation',
'escape',
'studio',
'proper',
'relax',
'tourist',
'component',
'afford',
'lawyer',
'suspect',
'cup',
'description',
'confidence',
'industrial',
'complain',
'perspective',
'error',
'arrest',
'assess',
'register',
'asset',
'signal',
'finger',
'relevant',
'explore',
'leadership',
'commitment',
'wake',
'necessarily',
'bright',
'frame',
'slowly',
'bond',
'hire',
'hole',
'tie',
'internal',
'chain',
'literature',
'victim',
'threaten',
'division',
'secure',
'amaze',
'device',
'birth',
'forest',
'label',
'root',
'factory',
'expense',
'channel',
'investigate',
'recommendation',
'rank',
'typical',
'west',
'friendly',
'resident',
'provision',
'concentrate',
'plenty',
'export',
'entirely',
'strongly',
'bridge',
'consist',
'graduate',
'brand',
'moral',
'insist',
'combination',
'abuse',
'ice',
'principal',
'master',
'definitely',
'session',
'grade',
'nevertheless',
'predict',
'previously',
'protection',
'largely',
'wed',
'rent',
'shot',
'appearance',
'reasonable',
'guarantee',
'till',
'theme',
'judgment',
'odd',
'approve',
'loan',
'definition',
'elect',
'atmosphere',
'farmer',
'comparison',
'characteristic',
'license',
'rely',
'narrow',
'succeed',
'identity',
'desk',
'permit',
'seriously',
'wild',
'empty',
'commission',
'unique',
'association',
'instrument',
'investor',
'practical',
'tea',
'lovely',
'soft',
'row',
'youth',
'lock',
'fuel',
'expectation',
'employment',
'celebrate',
'sexual',
'shoulder',
'breath',
'increasingly',
'import',
'bottle',
'ourselves',
'sheet',
'engine',
'cast',
'notion',
'conservative',
'journey',
'opposition',
'relief',
'debt',
'honor',
'outcome',
'blame',
'explanation',
'arise',
'musical',
'recover',
'dad',
'stretch',
'declare',
'retire',
'tiny',
'careful',
'suitable',
'native',
'fruit',
'analyze',
'witness',
'mail',
'terrible',
'researcher',
'ordinary',
'selection',
'anywhere',
'mental',
'participant',
'vision',
'personality',
'specifically',
'fat',
'entry',
'fellow',
'chemical',
'capture',
'tip',
'discount',
'peak',
'chairman',
'proportion',
'ear',
'disappear',
'shout',
'yard',
'constant',
'significantly',
'hill',
'considerable',
'instruction',
'intelligence',
'ideal',
'folk',
'surely',
'guard',
'cat',
'somewhat',
'kiss',
'presentation',
'joint',
'compete',
'poll',
'weak',
'faith',
'reduction',
'reserve',
'complaint',
'bore',
'mission',
'somehow',
'tone',
'neighborhood',
'passenger',
'justice',
'phase',
'thin',
'rush',
'formal',
'religion',
'employer',
'reject',
'latter',
'plate',
'ban',
'steal',
'protest',
'index',
'sad',
'frequently',
'circle',
'helpful',
'command',
'attractive',
'sick',
'impression',
'unable',
'joke',
'sky',
'column',
'electronic',
'impose',
'criminal',
'besides',
'properly',
'ancient',
'coast',
'ill',
'kick',
'closely',
'multiple',
'yield',
'via',
'legislation',
'county',
'unlike',
'mobile',
'assistant',
'implement',
'chart',
'attach',
'hell',
'everywhere',
'advise',
'household',
'acknowledge',
'reward',
'east',
'hat',
'academic',
'voter',
'meanwhile',
'furthermore',
'accuse',
'scientific',
'wage',
'absence',
'construct',
'remark',
'medicine',
'professor',
'rare',
'intention',
'dozen',
'settlement',
'gap',
'widely',
'minimum',
'northern',
'estate',
'equally',
'expose',
'alive',
'shut',
'victory',
'resolve',
'critic',
'variable',
'enormous',
'sweet',
'permanent',
'emotion',
'pursue',
'tall',
'urge',
'enemy',
'appoint',
'milk',
'talent',
'smell',
'prior',
'priority',
'online',
'phrase',
'pilot',
'stable',
'merely',
'resolution',
'communicate',
'injury',
'vast',
'exhibition',
'producer',
'regional',
'immediate',
'incident',
'childhood',
'draft',
'slip',
'accompany',
'politician',
'angry',
'knock',
'seed',
'salary',
'illustrate',
'imply',
'breakfast',
'temporary',
'liberal',
'lake',
'qualify',
'competitive',
'truly',
'hi',
'yellow',
'habit',
'disk',
'core',
'emotional',
'aircraft',
'self',
'metal',
'existence',
'bone',
'panel',
'prime',
'appointment',
'emphasize',
'maximum',
'effectively',
'elsewhere',
'bother',
'initiative',
'sharp',
'diet',
'motion',
'gray',
'plastic',
'complicate',
'discipline',
'disappoint',
'boss',
'assumption',
'freeze',
'extreme',
'passage',
'reputation',
'forth',
'negotiation',
'mechanism',
'coat',
'democracy',
'pocket',
'lucky',
'crash',
'observation',
'meat',
'concentration',
'implication',
'deserve',
'unusual',
'defend',
'classic',
'king',
'interaction',
'repair',
'collapse',
'borrow',
'fundamental',
'dish',
'abroad',
'soul',
'capable',
'defeat',
'presidential',
'perfectly',
'enhance',
'proud',
'emergency',
'educational',
'distinguish',
'substantial',
'nearby',
'manufacturer',
'slide',
'valuable',
'personally',
'breast',
'cope',
'approximately',
'accommodation',
'highlight',
'reporter',
'climate',
'shirt',
'exception',
'corporation',
'chip',
'winner',
'encounter',
'brown',
'breathe',
'excuse',
'partly',
'tennis',
'urban',
'confuse',
'southern',
'output',
'beauty',
'massive',
'install',
'calculate',
'mouse',
'mathematics',
'upper',
'creation',
'occupy',
'outline',
'sufficient',
'update',
'luck',
'preserve',
'split',
'swing',
'illness',
'journalist',
'sudden',
'advertisement',
'consistent',
'originally',
'aside',
'comfort',
'secondly',
'severe',
'gene',
'prospect',
'snow',
'plot',
'neck',
'criterion',
'primarily',
'integrate',
'criticism',
'convention',
'bet',
'retain',
'sequence',
'plain',
'volunteer',
'rural',
'calm',
'abandon',
'examination',
'silence',
'rapidly',
'efficient',
'revolution',
'delight',
'spell',
'premise',
'lean',
'dramatic',
'differ',
'grateful',
'protein',
'bike',
'distribute',
'intellectual',
'derive',
'crucial',
'unemployment',
'wheel',
'crop',
'minority',
'origin',
'interpretation',
'gentleman',
'drama',
'landscape',
'educate',
'toy',
'fault',
'exhibit',
'minor',
'hunt',
'storm',
'thick',
'achievement',
'negotiate',
'dominate',
'supplier',
'prize',
'typically',
'peer',
'pension',
'wing',
'acquisition',
'laughter',
'deeply',
'recognition',
'electricity',
'assistance',
'roof',
'retirement',
'respectively',
'variation',
'ultimately',
'proof',
'soil',
'smart',
'layer',
'upset',
'tooth',
'representation',
'preparation',
'dispute',
'agenda',
'emphasis',
'edition',
'silver',
'entertainment',
'honest',
'undertake',
'retail',
'wire',
'unlikely',
'gay',
'publication',
'slight',
'unknown',
'framework',
'zone',
'restrict',
'trace',
'inch',
'equivalent',
'solid',
'enterprise',
'elderly',
'owe',
'governor',
'uniform',
'port',
'pitch',
'arrival',
'contemporary',
'gate',
'ease',
'beer',
'specialist',
'assure',
'profile',
'mood',
'episode',
'crack',
'numerous',
'submit',
'symptom',
'virtually',
'era',
'coverage',
'tension',
'cable',
'sensitive',
'nervous',
'input',
'isolate',
'prisoner',
'eliminate',
'tight',
'wet',
'secondary',
'welfare',
'recruit',
'exclude',
'string',
'cloud',
'persuade',
'inspire',
'grand',
'hence',
'crew',
'phenomenon',
'pupil',
'false',
'assist',
'restore',
'formula',
'alter',
'perceive',
'routine',
'sink',
'stare',
'anymore',
'hero',
'supporter',
'convert',
'steady',
'meter',
'truck',
'nose',
'beside',
'sail',
'disaster',
'pace',
'heavily',
'devote',
'terrorist',
'justify',
'vital',
'fascinate',
'external',
'spare',
'whenever',
'depression',
'guilty',
'underlie',
'mom',
'distinction',
'satisfaction',
'incorporate',
'pour',
'sweep',
'obligation',
'sir',
'evaluate',
'anger',
'pub',
'perception',
'naturally',
'currency',
'database',
'initially',
'territory',
'stream',
'rarely',
'height',
'apparent',
'western',
'expansion',
'constantly',
'muscle',
'scare',
'badly',
'everyday',
'boundary',
'ratio',
'essay',
'scream',
'withdraw',
'pollution',
'disorder',
'furniture',
'symbol',
'apartment',
'demonstration',
'analyst',
'platform',
'steel',
'cake',
'transform',
'wound',
'restriction',
'foundation',
'designer',
'strain',
'innovation',
'album',
'singer',
'trail',
'trap',
'loose',
'extension',
'wealth',
'gradually',
'tank',
'evil',
'remarkable',
'tune',
'grass',
'invitation',
'transition',
'frighten',
'bid',
'breed',
'extraordinary',
'brilliant',
'adviser',
'stem',
'reverse',
'mode',
'mirror',
'awful',
'pose',
'adjust',
'creative',
'nowadays',
'poem',
'agricultural',
'competitor',
'alcohol',
'festival',
'vegetable',
'van',
'confident',
'planet',
'curve',
'knee',
'overcome',
'web',
'depth',
'entrance',
'log',
'giant',
'god',
'portion',
'substance',
'extensive',
'interpret',
'independence',
'sugar',
'inner',
'harm',
'consult',
'pink',
'shadow',
'strip',
'smooth',
'intervention',
'impress',
'exam',
'vice',
'radical',
'similarly',
'behave',
'loud',
'dimension',
'subsequent',
'infection',
'jacket',
'efficiency',
'dirty',
'statistic',
'regularly',
'resort',
'iron',
'broadcast',
'membership',
'bread',
'blind',
'pure',
'bloody',
'ally',
'quantity',
'bend',
'mature',
'briefly',
'alarm',
'disturb',
'sustain',
'flood',
'poverty',
'crazy',
'cite',
'newly',
'parallel',
'gender',
'sponsor',
'boot',
'accurate',
'dealer',
'button',
'burden',
'desert',
'mate',
'occasionally',
'shareholder',
'bowl',
'discovery',
'resistance',
'bath',
'frequency',
'criticize',
'tap',
'philosophy',
'lip',
'attribute',
'apologize',
'approval',
'grab',
'entitle',
'lend',
'involvement',
'exposure',
'conventional',
'digital',
'translate',
'edit',
'formation',
'deposit',
'pleasant',
'overseas',
'advocate',
'establishment',
'summary',
'rough',
'pen',
'recovery',
'seal',
'tube',
'tower',
'characterize',
'specify',
'exact',
'spin',
'operator',
'infant',
'dig',
'drag',
'mount',
'wrap',
'anticipate',
'dependent',
'specialize',
'angle',
'chicken',
'anxiety',
'virus',
'precisely',
'rival',
'offense',
'detect',
'teenager',
'admire',
'moderate',
'surgery',
'musician',
'significance',
'shower',
'illegal',
'charity',
'universal',
'cigarette',
'constitute',
'adequate',
'consultant',
'historian',
'cousin',
'visual',
'stupid',
'keen',
'ethnic',
'twin',
'clinical',
'eastern',
'forecast',
'segment',
'custom',
'adapt',
'sand',
'cap',
'prompt',
'charm',
'react',
'lecture',
'venture',
'compound',
'rescue',
'mess',
'preference',
'comprehensive',
'incentive',
'league',
'dialog',
'cream',
'rapid',
'cancel',
'regret',
'dismiss',
'margin',
'beneath',
'opponent',
'resist',
'capability',
'absolute',
'correspond',
'stroke',
'dare',
'barrier',
'rid',
'divorce',
'ruin',
'bury',
'counsel',
'tendency',
'frequent',
'motor',
'survival',
'counter',
'possess',
'permission',
'valley',
'float',
'mad',
'greatly',
'visible',
'electric',
'impressive',
'evolution',
'awareness',
'violent',
'slave',
'wealthy',
'architecture',
'acceptable',
'journal',
'coal',
'measurement',
'random',
'successfully',
'depress',
'illustration',
'burst',
'privilege',
'buyer',
'mutual',
'rail',
'motivate',
'laboratory',
'mortgage',
'promotion',
'passion',
'champion',
'fulfill',
'dust',
'dedicate',
'roughly',
'skirt',
'province',
'march',
'evaluation',
'compromise',
'accomplish',
'weakness',
'announcement',
'salt',
'glance',
'opera',
'contest',
'brush',
'embarrass',
'gallery',
'genetic',
'aggressive',
'chest',
'format',
'literary',
'govern',
'embrace',
'praise',
'silent',
'pump',
'publisher',
'celebration',
'golf',
'compensation',
'classical',
'weigh',
'versus',
'deficit',
'modify',
'flash',
'friendship',
'profession',
'literally',
'equation',
'gesture',
'entertain',
'fantastic',
'assign',
'inflation',
'historic',
'injure',
'remote',
'therapy',
'orange',
'twist',
'personnel',
'imagination',
'disagree',
'throat',
'insight',
'tackle',
'forever',
'exceed',
'expenditure',
'joy',
'pregnant',
'reliable',
'gear',
'poet',
'fortune',
'ceremony',
'pile',
'pig',
'mixture',
'automatically',
'scholar',
'psychological',
'dramatically',
'stake',
'creature',
'partnership',
'participation',
'clause',
'penalty',
'chamber',
'fancy',
'poetry',
'chat',
'clothing',
'evolve',
'sake',
'shelf',
'boost',
'tail',
'possession',
'abortion',
'curious',
'wooden',
'boom',
'tale',
'democratic',
'maintenance',
'consequently',
'pot',
'cow',
'strengthen',
'whilst',
'constraint',
'fold',
'bin',
'undergo',
'potentially',
'scope',
'pretend',
'diversity',
'allege',
'pride',
'intense',
'inquiry',
'resign',
'craft',
'strict',
'concrete',
'shell',
'damn',
'distinct',
'humor',
'limitation',
'indication',
'stability',
'wise',
'neglect',
'compose',
'jail',
'shelter',
'mere',
'carbon',
'regulate',
'cheese',
'trigger',
'pipe',
'destruction',
'guitar',
'flag',
'piano',
'magic',
'mystery',
'ski',
'whisper',
'rear',
'menu',
'species',
'moon',
'presumably',
'bless',
'airline',
'amendment',
'grandmother',
'jury',
'cooperation',
'civilian',
'composition',
'coin',
'regardless',
'scan',
'bunch',
'racial',
'greet',
'hopefully',
'sanction',
'trick',
'paragraph',
'maker',
'chocolate',
'stimulate',
'belt',
'potato',
'narrative',
'tissue',
'barely',
'invent',
'tourism',
'pro',
'stair',
'hesitate',
'shine',
'motivation',
'romantic',
'firmly',
'interior',
'stomach',
'nowhere',
'pray',
'championship',
'servant',
'immigrant',
'excess',
'complexity',
'liability',
'surprisingly',
'extract',
'implementation',
'bias',
'differently',
'catalog',
'continuous',
'golden',
'stamp',
'guideline',
'envelope',
'knife',
'biological',
'consume',
'luxury',
'weekly',
'wherever',
'bite',
'printer',
'firstly',
'anxious',
'adventure',
'fence',
'exhaust',
'attraction',
'ocean',
'quietly',
'castle',
'veteran',
'reflection',
'nerve',
'determination',
'altogether',
'fiction',
'carpet',
'cluster',
'confusion',
'hurry',
'logic',
'controversial',
'raw',
'grammar',
'revise',
'hint',
'hook',
'bell',
'liquid',
'panic',
'uncle',
'rice',
'slope',
'happiness',
'genuine',
'vessel',
'verb',
'reckon',
'silly',
'transportation',
'harbor',
'comedy',
'chase',
'storage',
'universe',
'horrible',
'sheep',
'lover',
'rat',
'portrait',
'innocent',
'substitute',
'supplement',
'adjustment',
'reasonably',
'filter',
'flexible',
'abstract',
'tent',
'precise',
'distant',
'stranger',
'shade',
'grain',
'situate',
'summarize',
'leap',
'snap',
'probability',
'leather',
'uncertainty',
'swear',
'refugee',
'shore',
'monthly',
'comprise',
'stir',
'excitement',
'sigh',
'pregnancy',
'experimental',
'institutional',
'slice',
'wander',
'empire',
'subsequently',
'gentle',
'attendance',
'ownership',
'qualification',
'suspend',
'functional',
'voluntary',
'pale',
'stain',
'athlete',
'organic',
'tongue',
'server',
'structural',
'fool',
'alongside',
'unite',
'gently',
'compute',
'wipe',
'weird',
'gaze',
'fade',
'cough',
'hypothesis',
'royal',
'theoretical',
'curtain',
'mayor',
'darkness',
'aunt',
'tournament',
'registration',
'fragment',
'listener',
'tender',
'density',
'ugly',
'module',
'faithfully',
'autumn',
'cheek',
'attachment',
'holder',
'grin',
'noun',
'fortunate',
'alright',
'lazy',
'hello',
'hunger',
'insure',
'ashamed',
'found',
'thirst',
];

main();
