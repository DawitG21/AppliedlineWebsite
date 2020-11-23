export class DataProvider {
    /*  languages = [
         { code: 'en-US', label: 'English' },
         { code: 'am', label: 'Amharic' },
         { code: 'fr', label: 'French' }
     ]; */
    languages = [
        { code: 'en-US', label: 'English' },
        { code: 'am', label: 'አማርኛ' },
        { code: 'fr', label: 'Français' }
    ];

    bannerMsg = [
        {
            label: 'Congratulations Ethiopian Airlines on your IATA-NDC certification. We Appliedline are proud to have helped achieve this milestone' +
                ' and look forward to greater achievements from this point on.',
            description: 'Well, 2 years of development, planning, and pushing through barriers pays off with moments like this.',
            hashTag: '#addisababa #ethiopianairlines #iatatraining #software #africatotheworld #africabusinessnews'
        }
    ];

    videoInfo = [
        {
            date: 'September 12, 2020',
            name: 'Happy New Year',
            description: 'New Year Greetings',
            description_2: '#2013 #happy #newyear',
            calendarUrl: 'assets/graphics/calendar.png',
            locationUrl: 'assets/graphics/placeholder.png',
            url: 'https://www.youtube.com/watch?v=p6aV-d8GZoc',
        }
    ];

    eventsList = [
        {
            event_1: 'Ethiopian Airlines NDC Certification',
            eventUrl: 'assets/graphics/iata-event.png',
            routerLink: 'etairlinesndc',
        },
        {
            event_1: 'CargoCanal Launch',
            eventUrl: 'assets/graphics/ccz.JPG',
            routerLink: 'cargocanal'
        }
    ];

    newsList = [
        {
            newsTitle: 'Melkam Addis Amet 2013',
            url: 'https://www.youtube.com/watch?v=p6aV-d8GZoc',
            newsUrl: 'assets/graphics/melkam.png',
        }, 
        {
            newsTitle: 'Coming Soon',
            url: 'https://doceipt.com/',
            newsUrl: 'assets/graphics/doci.png',
        },
        {
            newsTitle: 'Coming Soon',
            url: 'https://inibla.com/',
            newsUrl: 'assets/graphics/ini.png',
        }
    ];

    archivesList = [
        {
            archive_1: 'Seekerfit',            
            seekerUrl: 'assets/graphics/seekerfit.png',
            url: 'https://seekerfit.com/#!/'
        },
        {
            archive_1: 'CargoCanal on iOS and Android',          
            seekerUrl: 'assets/graphics/ccan.png',
            url: 'https://play.google.com/store/apps/details?id=com.appliedline.cargocanal'
        }
    ];
}