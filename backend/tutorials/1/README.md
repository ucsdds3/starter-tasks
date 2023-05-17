# Using Postman
This tutorial will walk you through Postman and how to use various aspects of it. If you are looking for instructions to install Postman, see [the backend page](/backend#testing).

## Table of Contents
- [Sending Requests](#sending-requests)
- [Request Modifiers](#request-modifiers)
	- [Query Parameters](#query-parameters)
	- [Authentication](#authentication)
	- [Headers](#headers)
	- [Payload](#payload)
- [Practice](#practice)

## Sending Requests
Your screen will look like the following once you enter a workspace. Some things to take note of is ensuring that you have Desktop Agent Enabled, this will appear on the bottom right 
![postman overview](https://cdn.discordapp.com/attachments/942218891952783421/1108228260329951322/image.png)
> The main screen of Postman

To send a request, enter the URL that you are trying to hit into the text field next to "SEND". Modify the type of request by using the dropdown menu to the left of the URL input.

## Request Modifiers
If you would like to modify the request, you can use the tabs below the URL field. Here, you can modify multiple things but the main ones are **query parameters**, **authorization**, **headers**, and **payload**. 

### Query Parameters
As seen in the image above, you can add key value pairs here. This will append it directly to the URL while you type them out. There is a checkbox on the left side to easily add and remove parameters. 

Example: If you are sending a request to `https://api.mangadex.org/manga` and you want to search for the title, you can add the `title` parameter and your query to the value. If I am trying to search for "Mashle", I can add the parameter `title` and value `Mashle` so that the fully built URL will look like `https://api.mangadex.org/manga?title=Mashle`.

### Authentication
As seen below, you can modify and add various forms of authorization into your request. This is most commonly used when querying 3rd party REST APIs. The most common authorization flow you will see is [OAuth2.0](https://oauth.net/2/). OAuth is an entirely separate complex topic so it will not be covered here. 

The main thing to note is that you can save your Bearer and Refresh token here to make it easy to test those APIs. At the time of writing, DS3 does not host any public APIs, much less those that require OAuth2.0 authorization, so this will not apply as much.
![auth overview](https://cdn.discordapp.com/attachments/942218891952783421/1108232549462970400/image.png)
> The Authentication Tab

### Headers
Generally, when a request is sent, headers are already predefined. However, you can modify your headers in the respective tab (seen below). The header of the request contains metadata about the request. This is most often used when dealing with [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) or some other protocol. You can also control various aspects of the request like the time to live (TTL).
![headers overview](https://cdn.discordapp.com/attachments/942218891952783421/1108234749643870279/image.png)
> The Headers tab 

### Payload
You can add a payload using the Body tab of the request. This is mainly used for testing form submissions or sending JSON data. If you would like to test a form, use the `form-data` selection and fill out the key value pairs that you are expecting in your API. If you are expecting a JSON payload, select the `raw` option and input your JSON there.
![](https://cdn.discordapp.com/attachments/942218891952783421/1108235778322083970/image.png)
> The Body tab

## Practice
Send a request the MangaDex API looking for the Manga "***Frieren at the Furneral***". In your request, search where the status of the manga is either `ongoing` or `completed`. Read the [documentation](https://api.mangadex.org/docs/redoc.html#tag/Manga/operation/get-search-manga) to understand the parameters. Your response should be as follows.
<details>
<summary>See Request (Answer)</summary>

Full URL Param:
- `api.mangadex.org/manga?title=Frieren at the Funeral&status[]=ongoing&status[]=completed`
- Postman:
	- ![](https://cdn.discordapp.com/attachments/942218891952783421/1108242953522118656/image.png)


</details>
<details>
<summary>See Response</summary>

```json
{
    "result": "ok",
    "response": "collection",
    "data": [
        {
            "id": "b0b721ff-c388-4486-aa0f-c2b0bb321512",
            "type": "manga",
            "attributes": {
                "title": {
                    "en": "Sousou no Frieren"
                },
                "altTitles": [
                    {
                        "en": "Frieren at the Funeral"
                    },
                    {
                        "en": "Frieren: Beyond Journey’s End"
                    },
                    {
                        "ru": "Фрирен, провожающая в последний путь"
                    },
                    {
                        "ja": "葬送のフリーレン"
                    },
                    {
                        "zh-hk": "葬送的芙莉蓮"
                    },
                    {
                        "ko": "장송의 프리렌"
                    },
                    {
                        "th": "คำอธิษฐานในวันที่จากลา Frieren"
                    },
                    {
                        "el": "Φρίρεν: Πέρα από το Τέλος του Ταξιδιού"
                    },
                    {
                        "de": "Frieren: Nach dem Ende der Reise"
                    }
                ],
                "description": {
                    "el": "Έχοντας νικήσει τον βασιλιά των δαιμόνων, το ταξίδι μιας δεκαετίας φτάνει στο τέλος του και μια νέα εποχή ειρήνης ξεκινά. Η ζωή όμως συνεχίζεται, ειδικά για την Φρίρεν, πως ως ξωτικό έχει ακόμα αιώνες ζωής μπροστά της. Με τις δεκαετίες να περνάνε, η Φρίρεν έρχεται αντιμέτωπη με την μεταβλητότητα του κόσμου και την παροδικότητα των ανθρώπων. Μετά από μια τελευταία συνάντηση με όλη την παλιά της ομάδα, συνειδητοποιεί ότι ο χρόνος που πέρασε με τους φίλους της ήταν υπερβολικά σύντομος και ότι δεν θα έχει ποτέ την ευκαιρία να τους μάθει καλύτερα. Έρχοντας αντιμέτωπη με την αλήθεια αυτή, η Φρίρεν αποφασίζει να ξεκινήσει ένα ακόμα ταξίδι αλλά αυτή τη φορά έχοντας σκοπό να μάθει το τι σημαίνει να είσαι άνθρωπος.",
                    "en": "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. With the great struggle over, they all go their separate ways to live a quiet life. But as an elf, Frieren, nearly immortal, will long outlive the rest of her former party. How will she come to terms with the mortality of her friends? How can she find fulfillment in her own life, and can she learn to understand what life means to the humans around her? Frieren begins a new journey to find the answer.",
                    "zh-hk": "在打倒了魔王的勇者一行人当中，魔法使芙莉莲是精灵，她和其他三人有不一样的地方。 生活在“之后”的世界里，她感受到了什么—— 留下来的人们所编织的葬送与祈祷又意味着什么—— 故事从“冒险的结束”开始。 这是讲述英雄们的活法的，后日谈奇幻作品！"
                },
                "isLocked": true,
                "links": {
                    "al": "118586",
                    "ap": "sousou-no-frieren",
                    "bw": "series/260459",
                    "kt": "56355",
                    "mu": "165944",
                    "amz": "https://www.amazon.co.jp/dp/4098501805",
                    "ebj": "https://ebookjapan.yahoo.co.jp/books/601441/",
                    "mal": "126287",
                    "raw": "https://www.sunday-webry.com/detail.php?title_id=1093",
                    "engtl": "https://www.viz.com/frieren-beyond-journeys-end"
                },
                "originalLanguage": "ja",
                "lastVolume": "",
                "lastChapter": "",
                "publicationDemographic": "shounen",
                "status": "ongoing",
                "year": 2020,
                "contentRating": "safe",
                "tags": [
                    {
                        "id": "0a39b5a1-b235-4886-a747-1d05d216532d",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Award Winning"
                            },
                            "description": {},
                            "group": "format",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "36fd93ea-e8b8-445e-b836-358f02b3d33d",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Monsters"
                            },
                            "description": {},
                            "group": "theme",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "39730448-9a5f-48a2-85b0-a70db87b1233",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Demons"
                            },
                            "description": {},
                            "group": "theme",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "87cc87cd-a395-47af-b27a-93258283bbc6",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Adventure"
                            },
                            "description": {},
                            "group": "genre",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "a1f53773-c69a-4ce5-8cab-fffcd90b1565",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Magic"
                            },
                            "description": {},
                            "group": "theme",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Drama"
                            },
                            "description": {},
                            "group": "genre",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "cdc58593-87dd-415e-bbc0-2ec27bf404cc",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Fantasy"
                            },
                            "description": {},
                            "group": "genre",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "e5301a23-ebd9-49dd-a0cb-2add944c7fe9",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Slice of Life"
                            },
                            "description": {},
                            "group": "genre",
                            "version": 1
                        },
                        "relationships": []
                    }
                ],
                "state": "published",
                "chapterNumbersResetOnNewVolume": false,
                "createdAt": "2020-06-30T04:20:01+00:00",
                "updatedAt": "2023-04-10T00:22:40+00:00",
                "version": 56,
                "availableTranslatedLanguages": [
                    "pt-br",
                    "tr",
                    "id",
                    "ru",
                    "en",
                    "it",
                    "th",
                    "el",
                    "fr"
                ],
                "latestUploadedChapter": "518a1044-66b4-448b-bb01-c13a1c8e18b4"
            },
            "relationships": [
                {
                    "id": "b3136811-9761-4606-93cf-583a00dde5e9",
                    "type": "author"
                },
                {
                    "id": "ff98c5c0-daca-4c97-8c3d-1e2b98d04d9b",
                    "type": "artist"
                },
                {
                    "id": "080ed04d-f5b7-4f61-9736-5faa712043a0",
                    "type": "cover_art"
                }
            ]
        },
        {
            "id": "b08e557d-255e-49d6-8b0b-2376fe84d461",
            "type": "manga",
            "attributes": {
                "title": {
                    "en": "Marrying the Woman I Met At My Ex-Husband's Funeral"
                },
                "altTitles": [
                    {
                        "ja-ro": "Motoo no Sōshiki de Deatta Onna to Kekkon suru Hanashi"
                    },
                    {
                        "ja": "元夫の葬式で出会った女と結婚する話"
                    }
                ],
                "description": {},
                "isLocked": false,
                "links": {
                    "raw": "https://www.pixiv.net/en/artworks/86161148"
                },
                "originalLanguage": "ja",
                "lastVolume": "",
                "lastChapter": "",
                "publicationDemographic": null,
                "status": "completed",
                "year": null,
                "contentRating": "safe",
                "tags": [
                    {
                        "id": "0234a31e-a729-4e28-9d6a-3f87c4966b9e",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Oneshot"
                            },
                            "description": {},
                            "group": "format",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "a3c67850-4684-404e-9b7f-c69850ee5da6",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Girls' Love"
                            },
                            "description": {},
                            "group": "genre",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "e197df38-d0e7-43b5-9b09-2842d0c326dd",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Web Comic"
                            },
                            "description": {},
                            "group": "format",
                            "version": 1
                        },
                        "relationships": []
                    },
                    {
                        "id": "f8f62932-27da-4fe4-8ee1-6779a8c5edba",
                        "type": "tag",
                        "attributes": {
                            "name": {
                                "en": "Tragedy"
                            },
                            "description": {},
                            "group": "genre",
                            "version": 1
                        },
                        "relationships": []
                    }
                ],
                "state": "published",
                "chapterNumbersResetOnNewVolume": false,
                "createdAt": "2020-12-30T00:00:59+00:00",
                "updatedAt": "2022-01-28T06:21:37+00:00",
                "version": 3,
                "availableTranslatedLanguages": [
                    "en",
                    "vi"
                ],
                "latestUploadedChapter": "b1c65994-517b-4ada-a1e1-d52ed8171aa5"
            },
            "relationships": [
                {
                    "id": "84db4a49-2112-47b1-a5f5-8eb91ca370a4",
                    "type": "author"
                },
                {
                    "id": "84db4a49-2112-47b1-a5f5-8eb91ca370a4",
                    "type": "artist"
                },
                {
                    "id": "8c14d419-c107-4f5b-b8e2-2358ff66e02b",
                    "type": "cover_art"
                }
            ]
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 2
}
```

<details>