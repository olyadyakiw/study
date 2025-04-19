const books = [
    {
        title: 'Algorithms',
        author: ['Robert Sedgewick', 'Kevin Wayne'],
        publisher: 'Addison-Wesley Professional',
        publicationDate: '2011-03-24',
        edition: 4,
        keywords: [
            'computer science',
            'programming',
            'algorithms',
            'data structures',
            'java',
            'math',
            'software',
            'engineering',
        ],
        pages: 976,
        format: 'hardcover',
        ISBN: '9780321573513',
        language: 'English',
        programmingLanguage: 'Java',
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.41,
                ratingsCount: 1733,
                reviewsCount: 63,
                fiveStarRatingCount: 976,
                oneStarRatingCount: 13,
            },
        },
        highlighted: true,
    },
    {
        title: 'Structure and Interpretation of Computer Programs',
        author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
        publisher: 'The MIT Press',
        publicationDate: '2022-04-12',
        edition: 2,
        keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
        pages: 640,
        format: 'paperback',
        ISBN: '9780262543231',
        language: 'English',
        programmingLanguage: 'JavaScript',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.36,
                ratingsCount: 14,
                reviewsCount: 3,
                fiveStarRatingCount: 8,
                oneStarRatingCount: 0,
            },
        },
        highlighted: true,
    },
    {
        title: "Computer Systems: A Programmer's Perspective",
        author: ['Randal E. Bryant', "David Richard O'Hallaron"],
        publisher: 'Prentice Hall',
        publicationDate: '2002-01-01',
        edition: 1,
        keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
        pages: 978,
        format: 'hardcover',
        ISBN: '9780130340740',
        language: 'English',
        programmingLanguage: 'C',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 1010,
                reviewsCount: 57,
                fiveStarRatingCount: 638,
                oneStarRatingCount: 16,
            },
        },
        highlighted: true,
    },
    {
        title: 'Operating System Concepts',
        author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
        publisher: 'John Wiley & Sons',
        publicationDate: '2004-12-14',
        edition: 10,
        keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
        pages: 921,
        format: 'hardcover',
        ISBN: '9780471694663',
        language: 'English',
        programmingLanguage: 'C, Java',
        onlineContent: false,
        thirdParty: {
            goodreads: {
                rating: 3.9,
                ratingsCount: 2131,
                reviewsCount: 114,
                fiveStarRatingCount: 728,
                oneStarRatingCount: 65,
            },
        },
    },
    {
        title: 'Engineering Mathematics',
        author: ['K.A. Stroud', 'Dexter J. Booth'],
        publisher: 'Palgrave',
        publicationDate: '2007-01-01',
        edition: 14,
        keywords: ['mathematics', 'engineering'],
        pages: 1288,
        format: 'paperback',
        ISBN: '9781403942463',
        language: 'English',
        programmingLanguage: null,
        onlineContent: true,
        thirdParty: {
            goodreads: {
                rating: 4.35,
                ratingsCount: 370,
                reviewsCount: 18,
                fiveStarRatingCount: 211,
                oneStarRatingCount: 6,
            },
        },
        highlighted: true,
    },
    {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Josh Kaufman',
        publisher: 'Portfolio',
        publicationDate: '2010-12-30',
        keywords: ['business'],
        pages: 416,
        format: 'hardcover',
        ISBN: '9781591843528',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.11,
                ratingsCount: 40119,
                reviewsCount: 1351,
                fiveStarRatingCount: 18033,
                oneStarRatingCount: 1090,
            },
        },
    },
    {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        publisher: 'Genever Benning',
        publicationDate: '2021-07-28',
        keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
        pages: 865,
        format: 'paperback',
        ISBN: '9780990582939',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.7,
                ratingsCount: 253,
                reviewsCount: 23,
                fiveStarRatingCount: 193,
                oneStarRatingCount: 0,
            },
        },
    },
    {
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        publisher: 'Grand Central Publishing',
        publicationDate: '2016-01-05',
        edition: 1,
        keywords: ['work', 'focus', 'personal development', 'business'],
        pages: 296,
        format: 'hardcover',
        ISBN: '9781455586691',
        language: 'English',
        thirdParty: {
            goodreads: {
                rating: 4.19,
                ratingsCount: 144584,
                reviewsCount: 11598,
                fiveStarRatingCount: 63405,
                oneStarRatingCount: 1808,
            },
        },
        highlighted: true,
    },
]

// // 1.1
// const [firstBook, secondBook] = books

// // 1.2
// const [, , thirdBook] = books

// // 1.3
// const ratings = [
//     ['rating', 4.19],
//     ['ratingsCount', 144584],
// ]
// const [[, rating], [, ratingCount]] = ratings

// // 1.4
// const ratingStars = [63405, 1808]
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars

// 2.1
// const { title, author, ISBN } = books[0]

// 2.2
// let { keywords: bookTags } = books[0]
// console.log(bookTags)

// 2.3
// const { language, programmingLanguage = 'unknown' } = books[6]

// 2.4
// let bookTitle = 'unknown'
// let bookAuthor = 'unknown'

// ({title: bookTitle, author: bookAuthor} = books[0]);

// 2.5
// const {
//     thirdParty: {
//         goodreads: { rating: bookRating },
//     },
// } = books[0]
// console.log(bookRating)

// 2.6
// const printBookInfo = function ({ title, author, publicationDate: year = 'year unknown' }) {
//     console.log(`${title} by ${author}, ${year}`)
// }

// printBookInfo(books[0])
// printBookInfo({
//     title: 'Book title',
//     author: 'Book author',
// })

// 3.1
// const bookAuthors = [...books[0].author, ...books[1].author]
// console.log(bookAuthors)

// 3.2
// function spellWord(str) {
//     console.log(...str)
// }

// spellWord('Javascript')

// 4.1
// const [mainKeyword, ...rest] = books[0].keywords

// 4.2
// const { publisher: bookPublisher, ...restOfTheBook } = books[1]
// console.log(bookPublisher)
// console.log(restOfTheBook)

// 4.3
// function printBookAuthorsCount(title, ...authors) {
//     console.log(`The book "${title}" has ${authors.length} authors`)
// }

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne')

// 5.1
// function hasExamplesInJava(book) {
//     return book.programmingLanguage === 'Java' || 'no data available'
// }

// 5.2
// books.forEach(book => {
//     book.onlineContent && console.log(`${book.title}" provides online content`)
// })

// 6.1
// books.forEach(book => {
//     book.onlineContent ?? console.log(`${book.title}" provides no data about its online content`)
// })

// // 7.1
// books.forEach(book => {
//     book.edition ||= 1
// })

// // 7.2
// books.forEach(book => {
//     book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2)
// })

// 8.1
// let pageSum = 0
// for (const book of books) {
//     pageSum += book.pages
// }
// console.log(pageSum)

// 8.2
// const allAuthors = []
// for (const book of books) {
//     if (typeof book.author === 'object') {
//         for (const author of book.author) {
//             allAuthors.push(author)
//         }
//     } else {
//         allAuthors.push(book.author)
//     }
// }
// console.log(allAuthors)

// 8.3
// for (const [id, author] of allAuthors.entries()) {
//     console.log(`${id + 1}. ${author}`)
// }

// 9.1
// const bookData = [
//     ['title', 'Computer Networking: A Top-Down Approach'],
//     ['author', ['James F. Kurose', 'Keith W. Ross']],
//     ['publisher', 'Addison Wesley'],
// ]

// // Do the rest
// const newBook = {
//     [bookData[0][0]]: bookData[0][1],
//     [bookData[1][0]]: [bookData[1][1][0], bookData[1][1][1]],
//     [bookData[2][0]]: [bookData[2][1]],
// }
// console.log(newBook)

// 9.2
// const pages = 880

// const newBook2 = {
//     title: 'The C Programming Language',
//     author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//     pages,
// }

// 10.1
// const getFirstKeyword = book => {
//     return book.keywords?.[0]
// }

// console.log(getFirstKeyword(books[0]))

// 11.1
// const entries = []
// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//     entries.push([key])
// }
// console.log(entries)

// 11.2

// Object.entries(books[0].thirdParty.goodreads).forEach(([key, value]) => {
//     entries.push([key, value])
// })
// console.log(entries)

// 11.3
// const entries2 = Object.entries(books[0].thirdParty.goodreads);

// 11.4
// console.log(entries)
// console.log(entries2)

// 12
// const allKeywords = []
// const keywordsSet = new Set()

// for (const book of books) {
//     for (const keyword of book.keywords) {
//         keywordsSet.add(keyword)
//     }
// }
// keywordsSet.add('coding')
// keywordsSet.add('science')
// keywordsSet.delete('business')
// keywordsSet.clear()

// allKeywords.push(...keywordsSet)
// console.log(allKeywords)


// 13.1
// const book = new Map([
//     ['title', 'Clean Code'],
//     ['author', 'Robert C. Martin'],
// ])

// 13.2
// book.set('pages', 464)
// console.log(book)

// 13.3
// const title = book.get('title')
// const author = book.get('author')
// console.log(`${title} by ${author}`)

// 13.4
// console.log(book.size)

// 13.5
// book.has('author') ? console.log("The author of the book is known") : 0

// 14.1
// const firstBookMap = new Map(Object.entries(books[0]))
// console.log(firstBookMap)

// // 14.2
// for(const [key, value] of firstBookMap) {
//     if (typeof value === 'number') console.log(key)
// }

// 15.1
// console.log(books[0].ISBN[6])
// console.log(books[0].ISBN[4])
// console.log(books[0].ISBN[9])
// console.log(books[0].ISBN[8])

// // 15.2
// const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing'
// console.log(quote.indexOf('chess'))

// // 15.3
// console.log(quote.slice(quote.lastIndexOf(' ') + 1))

// // 15.4
// const isContributor = (author) => {
//     author.indexOf('Contributor') !== -1 ? console.log(true) : console.log(false)
// }

// isContributor('Julie Sussman (Contributor)')
// isContributor('Robert Sedgewick')

// 16.1
// const normalizeAuthorName = (name) => {
//     const normalize = name.toLowerCase().trim()
//     let n = normalize.slice(0, normalize.indexOf(' ') + 1).trim()
//     let s = normalize.slice(normalize.indexOf(' '), normalize.indexOf('(')).trim()
//     n = n[0].toUpperCase() + n.slice(1)
//     s = s[0].toUpperCase() + s.slice(1)
//     console.log(n + ' ' + s)
// }

// normalizeAuthorName('  JuliE sussMan (Contributor)')

// // 16.2
// const newBookTitle = books[1].title.replace('Programs', 'Software')
// console.log(newBookTitle)

// 'solo'.contains

// // 16.3
// const logBookTheme = (title) => {
//     const normalize = title.toLowerCase()
//     if(normalize.startsWith('computer')) {
//         console.log('This book is about computers')
//     } else if(normalize.includes('algorithms') && normalize.includes('structures')) {
//         console.log('This book is about algorithms and data structures')
//     } else if(!normalize.includes('operating') && (normalize.endsWith('system') ||normalize.endsWith('systems') )) {
//         console.log('This book is about some systems, but definitely not about operating systems')
//     }
// }

// logBookTheme(books[0].title)
// logBookTheme(books[1].title)
// logBookTheme(books[2].title)
// logBookTheme(books[3].title)

// 17.1
// const logBookCategories = categories => {
//     for(const category of categories.split(';')) {
//         console.log(category)
//     }
// }

// const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics'
// logBookCategories(bookCategories)

// 17.2
// const getKeywordsAsString = books => {
//     const keywords = []
//     for(const book of books) {
//         keywords.push(...book.keywords)
//     }
//     const result = [...new Set(keywords)].join('; ')
//     console.log(result)
// }

// getKeywordsAsString(books)

// 17.3
// const bookChapters = [
//     ['The Basics', 14],
//     ['Sorting', 254],
//     ['Searching', 372],
//     ['Graphs', 526],
//     ['Strings', 706],
// ]

// const logBookChapters = bookChapters => {
//     for(const [key, value] of bookChapters) {
//         console.log(`${key.padEnd(20, '_')} ${value}`)
//     }
// }

// logBookChapters(bookChapters)

