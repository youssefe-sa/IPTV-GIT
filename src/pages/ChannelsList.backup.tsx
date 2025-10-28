import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

// IPTV channels data organized by countries and categories
const countries = [
  {
    id: 1,
    name: "Canada",
    categories: [
      {
        id: 101,
        name: "General",
        channels: [
          { id: 1001, name: "CBC MONTREAL", language: "English/French", category: "General" },
          { id: 1002, name: "CBC TORONTO", language: "English", category: "General" },
          { id: 1003, name: "CBC VANCOUVER", language: "English", category: "General" },
          { id: 1004, name: "CTV TORONTO", language: "English", category: "General" },
          { id: 1005, name: "CTV VANCOUVER", language: "English", category: "General" },
          { id: 1006, name: "GLOBAL TORONTO", language: "English", category: "General" },
          { id: 1007, name: "GLOBAL VANCOUVER", language: "English", category: "General" },
          { id: 1008, name: "TVO", language: "English", category: "General" },
          { id: 1009, name: "CITY TV TORONTO", language: "English", category: "General" },
          { id: 1010, name: "CP24", language: "English", category: "News" },
          { id: 1011, name: "CPAC", language: "English/French", category: "News" },
          { id: 1012, name: "CTV NEWS NETWORK", language: "English", category: "News" },
          { id: 1013, name: "GLOBAL NEWS", language: "English", category: "News" },
          { id: 1014, name: "CBC NEWS NETWORK", language: "English", category: "News" },
          { id: 1015, name: "BBC CANADA", language: "English", category: "News" },
          { id: 1016, name: "CNN INTERNATIONAL", language: "English", category: "News" },
          { id: 1017, name: "FOX NEWS", language: "English", category: "News" },
          { id: 1018, name: "MSNBC", language: "English", category: "News" },
          { id: 1019, name: "BLOOMBERG CANADA", language: "English", category: "News" },
          { id: 1020, name: "WEATHER NETWORK", language: "English", category: "News" }
        ]
      },
      {
        id: 102,
        name: "Sports",
        channels: [
          { id: 2001, name: "TSN 1", language: "English", category: "Sports" },
          { id: 2002, name: "TSN 2", language: "English", category: "Sports" },
          { id: 2003, name: "TSN 3", language: "English", category: "Sports" },
          { id: 2004, name: "TSN 4", language: "English", category: "Sports" },
          { id: 2005, name: "TSN 5", language: "English", category: "Sports" },
          { id: 2006, name: "SPORTSNET ONTARIO", language: "English", category: "Sports" },
          { id: 2007, name: "SPORTSNET EAST", language: "English", category: "Sports" },
          { id: 2008, name: "SPORTSNET WEST", language: "English", category: "Sports" },
          { id: 2009, name: "SPORTSNET PACIFIC", language: "English", category: "Sports" },
          { id: 2010, name: "RDS", language: "French", category: "Sports" },
          { id: 2011, name: "RDS 2", language: "French", category: "Sports" },
          { id: 2012, name: "TVA SPORTS", language: "French", category: "Sports" },
          { id: 2013, name: "NFL NETWORK", language: "English", category: "Sports" },
          { id: 2014, name: "NBA TV", language: "English", category: "Sports" },
          { id: 2015, name: "MLB NETWORK", language: "English", category: "Sports" },
          { id: 2016, name: "GOLF CHANNEL", language: "English", category: "Sports" },
          { id: 2017, name: "WWE NETWORK", language: "English", category: "Sports" },
          { id: 2018, name: "FIGHT NETWORK", language: "English", category: "Sports" },
          { id: 2019, name: "SPORTSNET 360", language: "English", category: "Sports" },
          { id: 2020, name: "DAZN", language: "English", category: "Sports" }
        ]
      },
      {
        id: 103,
        name: "Entertainment",
        channels: [
          { id: 3001, name: "CTV DRAMA", language: "English", category: "Entertainment" },
          { id: 3002, name: "CTV COMEDY", language: "English", category: "Entertainment" },
          { id: 3003, name: "GLOBAL TV", language: "English", category: "Entertainment" },
          { id: 3004, name: "SHOWCASE", language: "English", category: "Entertainment" },
          { id: 3005, name: "HISTORY", language: "English", category: "Documentary" },
          { id: 3006, name: "DISCOVERY", language: "English", category: "Documentary" },
          { id: 3007, name: "ANIMAL PLANET", language: "English", category: "Documentary" },
          { id: 3008, name: "NAT GEO", language: "English", category: "Documentary" },
          { id: 3009, name: "HISTORY 2", language: "English", category: "Documentary" },
          { id: 3010, name: "DISCOVERY SCIENCE", language: "English", category: "Documentary" },
          { id: 3011, name: "DISCOVERY VELOCITY", language: "English", category: "Documentary" },
          { id: 3012, name: "HBO CANADA", language: "English", category: "Movies" },
          { id: 3013, name: "MOVIE NETWORK", language: "English", category: "Movies" },
          { id: 3014, name: "CINEMAX", language: "English", category: "Movies" },
          { id: 3015, name: "TMN", language: "English", category: "Movies" },
          { id: 3016, name: "SUPER CHANNEL", language: "English", category: "Movies" },
          { id: 3017, name: "HALLMARK", language: "English", category: "Movies" },
          { id: 3018, name: "LIFETIME", language: "English", category: "Movies" },
          { id: 3019, name: "W NETWORK", language: "English", category: "Entertainment" },
          { id: 3020, name: "SLICE", language: "English", category: "Entertainment" }
        ]
      },
      {
        id: 104,
        name: "Kids & Family",
        channels: [
          { id: 4001, name: "TREEHOUSE", language: "English", category: "Kids" },
          { id: 4002, name: "YTV", language: "English", category: "Kids" },
          { id: 4003, name: "TELE-TOON", language: "French", category: "Kids" },
          { id: 4004, name: "TELE-QUÉBEC", language: "French", category: "Kids" },
          { id: 4005, name: "TÉLÉ-QUÉBEC", language: "French", category: "Kids" },
          { id: 4006, name: "DISNEY JUNIOR", language: "English", category: "Kids" },
          { id: 4007, name: "DISNEY XD", language: "English", category: "Kids" },
          { id: 4008, name: "DISNEY CHANNEL", language: "English", category: "Kids" },
          { id: 4009, name: "CARTOON NETWORK", language: "English", category: "Kids" },
          { id: 4010, name: "NICKELODEON", language: "English", category: "Kids" },
          { id: 4011, name: "NICK JR.", language: "English", category: "Kids" },
          { id: 4012, name: "FAMILY JR.", language: "English", category: "Kids" },
          { id: 4013, name: "TELE-QUÉBEC ENFANTS", language: "French", category: "Kids" },
          { id: 4014, name: "TELE-QUÉBEC UNIVERSEL", language: "French", category: "Kids" },
          { id: 4015, name: "TELE-QUÉBEC", language: "French", category: "Kids" },
          { id: 4016, name: "TELE-QUÉBEC HD", language: "French", category: "Kids" },
          { id: 4017, name: "TELE-QUÉBEC 4K", language: "French", category: "Kids" },
          { id: 4018, name: "TELE-QUÉBEC 8K", language: "French", category: "Kids" },
          { id: 4019, name: "TELE-QUÉBEC 16K", language: "French", category: "Kids" },
          { id: 4020, name: "TELE-QUÉBEC 32K", language: "French", category: "Kids" }
        ]
      },
      {
        id: 105,
        name: "Music",
        channels: [
          { id: 5001, name: "MUCH", language: "English", category: "Music" },
          { id: 5002, name: "MUCH MUSIC", language: "English", category: "Music" },
          { id: 5003, name: "MUCH LOUD", language: "English", category: "Music" },
          { id: 5004, name: "MUCH RETRO", language: "English", category: "Music" },
          { id: 5005, name: "MUCH VIBE", language: "English", category: "Music" },
          { id: 5006, name: "MTV", language: "English", category: "Music" },
          { id: 5007, name: "MTV 2", language: "English", category: "Music" },
          { id: 5008, name: "MTV HITS", language: "English", category: "Music" },
          { id: 5009, name: "MTV DANCE", language: "English", category: "Music" },
          { id: 5010, name: "MTV CLASSIC", language: "English", category: "Music" },
          { id: 5011, name: "CMT", language: "English", category: "Music" },
          { id: 5012, name: "GAC", language: "English", category: "Music" },
          { id: 5013, name: "STINGRAY MUSIC", language: "English", category: "Music" },
          { id: 5014, name: "STINGRAY HITLIST", language: "English", category: "Music" },
          { id: 5015, name: "STINGRAY ROCK", language: "English", category: "Music" },
          { id: 5016, name: "STINGRAY COUNTRY", language: "English", category: "Music" },
          { id: 5017, name: "STINGRAY JAZZ", language: "English", category: "Music" },
          { id: 5018, name: "STINGRAY CLASSICAL", language: "English", category: "Music" },
          { id: 5019, name: "STINGRAY LOUNGE", language: "English", category: "Music" },
          { id: 5020, name: "STINGRAY AMBIENT", language: "English", category: "Music" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "United States",
    categories: [
      {
        id: 201,
        name: "Entertainment",
        channels: [
          { id: 10001, name: "HBO", language: "English", category: "Entertainment" },
          { id: 10002, name: "HBO 2", language: "English", category: "Entertainment" },
          { id: 10003, name: "HBO SIGNATURE", language: "English", category: "Entertainment" },
          { id: 10004, name: "SHOWTIME", language: "English", category: "Entertainment" },
          { id: 10005, name: "CINEMAX", language: "English", category: "Entertainment" },
          { id: 10006, name: "STARZ", language: "English", category: "Entertainment" },
          { id: 10007, name: "FX", language: "English", category: "Entertainment" },
          { id: 10008, name: "AMC", language: "English", category: "Entertainment" },
          { id: 10009, name: "USA NETWORK", language: "English", category: "Entertainment" },
          { id: 10010, name: "TNT", language: "English", category: "Entertainment" },
          { id: 10011, name: "TBS", language: "English", category: "Entertainment" },
          { id: 10012, name: "BRAVO", language: "English", category: "Entertainment" },
          { id: 10013, name: "SYFY", language: "English", category: "Entertainment" },
          { id: 10014, name: "A&E", language: "English", category: "Entertainment" },
          { id: 10015, name: "HISTORY", language: "English", category: "Entertainment" },
          { id: 10016, name: "DISCOVERY", language: "English", category: "Entertainment" },
          { id: 10017, name: "NAT GEO", language: "English", category: "Entertainment" },
          { id: 10018, name: "ANIMAL PLANET", language: "English", category: "Entertainment" },
          { id: 10019, name: "TRAVEL CHANNEL", language: "English", category: "Entertainment" },
          { id: 10020, name: "FOOD NETWORK", language: "English", category: "Entertainment" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "France",
    categories: [
      {
        id: 301,
        name: "General",
        channels: [
          { id: 100001, name: "TF1", language: "French", category: "General" },
          { id: 100002, name: "FRANCE 2", language: "French", category: "General" },
          { id: 100003, name: "FRANCE 3", language: "French", category: "General" },
          { id: 100004, name: "CANAL+", language: "French", category: "General" },
          { id: 100005, name: "FRANCE 5", language: "French", category: "General" },
          { id: 100006, name: "M6", language: "French", category: "General" },
          { id: 100007, name: "ARTE", language: "French/German", category: "General" },
          { id: 100008, name: "C8", language: "French", category: "General" },
          { id: 100009, name: "W9", language: "French", category: "General" },
          { id: 100010, name: "TMC", language: "French", category: "General" },
          { id: 100011, name: "TFX", language: "French", category: "General" },
          { id: 100012, name: "NRJ 12", language: "French", category: "General" },
          { id: 100013, name: "LCP", language: "French", category: "News" },
          { id: 100014, name: "FRANCE 4", language: "French", category: "General" },
          { id: 100015, name: "BFMTV", language: "French", category: "News" },
          { id: 100016, name: "CNEWS", language: "French", category: "News" },
          { id: 100017, name: "CSTAR", language: "French", category: "General" },
          { id: 100018, name: "GULLI", language: "French", category: "Kids" },
          { id: 100019, name: "FRANCE INFO", language: "French", category: "News" },
          { id: 100020, name: "PARIS PREMIÈRE", language: "French", category: "General" }
        ]
      }
    ]
  }
      { id: 7, name: "Sky Sports Premier League HD", language: "English", category: "Sports" },
      { id: 8, name: "Eurosport 1 HD", language: "English", category: "Sports" },
      { id: 9, name: "NBA TV HD", language: "English", category: "Sports" },
      { id: 10, name: "ESPN HD", language: "English", category: "Sports" },
      { id: 11, name: "BT Sport 1 HD", language: "English", category: "Sports" },
      { id: 12, name: "DAZN 1 HD", language: "English", category: "Sports" }
    ]
  },
  {
    id: 2,
    name: "Entertainment",
    channels: [
      { id: 101, name: "MBC 1 HD", language: "Arabic", category: "Entertainment" },
      { id: 102, name: "MBC 2 HD", language: "English", category: "Entertainment" },
      { id: 103, name: "MBC 3 HD", language: "Arabic", category: "Entertainment" },
      { id: 104, name: "MBC 4 HD", language: "English", category: "Entertainment" },
      { id: 105, name: "MBC 5 HD", language: "French", category: "Entertainment" },
      { id: 106, name: "MBC Action HD", language: "English", category: "Entertainment" },
      { id: 107, name: "MBC Bollywood HD", language: "Hindi", category: "Entertainment" },
      { id: 108, name: "MBC Drama HD", language: "Arabic", category: "Entertainment" },
      { id: 109, name: "MBC Iraq HD", language: "Arabic", category: "Entertainment" },
      { id: 110, name: "MBC Masr 2 HD", language: "Arabic", category: "Entertainment" }
    ]
  },
  {
    id: 3,
    name: "Movies",
    channels: [
      { id: 201, name: "OSN Movies First HD", language: "English", category: "Movies" },
      { id: 202, name: "OSN Movies Action HD", language: "English", category: "Movies" },
      { id: 203, name: "OSN Movies Family HD", language: "English", category: "Movies" },
      { id: 204, name: "OSN Movies Premier HD", language: "English", category: "Movies" },
      { id: 205, name: "MBC 2 HD", language: "English", category: "Movies" },
      { id: 206, name: "MBC Max HD", language: "English", category: "Movies" },
      { id: 207, name: "MBC Action HD", language: "English", category: "Movies" },
      { id: 208, name: "Star Movies HD", language: "English", category: "Movies" },
      { id: 209, name: "FOX Movies HD", language: "English", category: "Movies" },
      { id: 210, name: "MBC Bollywood HD", language: "Hindi", category: "Movies" }
    ]
  },
  {
    id: 4,
    name: "News",
    channels: [
      { id: 301, name: "Al Jazeera HD", language: "Arabic/English", category: "News" },
      { id: 302, name: "Al Arabiya HD", language: "Arabic", category: "News" },
      { id: 303, name: "BBC News HD", language: "English", category: "News" },
      { id: 304, name: "CNN International HD", language: "English", category: "News" },
      { id: 305, name: "France 24 HD", language: "French/English/Arabic", category: "News" },
      { id: 306, name: "Sky News Arabia HD", language: "Arabic", category: "News" },
      { id: 307, name: "RT Arabic HD", language: "Arabic", category: "News" },
      { id: 308, name: "Al Hadath HD", language: "Arabic", category: "News" },
      { id: 309, name: "Al Ekhbariya HD", language: "Arabic", category: "News" },
      { id: 310, name: "Al Mayadeen HD", language: "Arabic", category: "News" }
    ]
  },
  {
    id: 5,
    name: "Kids",
    channels: [
      { id: 401, name: "Spacetoon HD", language: "Arabic", category: "Kids" },
      { id: 402, name: "Cartoon Network HD", language: "English/Arabic", category: "Kids" },
      { id: 403, name: "Nickelodeon HD", language: "English/Arabic", category: "Kids" },
      { id: 404, name: "Disney Channel HD", language: "English/Arabic", category: "Kids" },
      { id: 405, name: "MBC 3 HD", language: "Arabic", category: "Kids" },
      { id: 406, name: "Baraem HD", language: "Arabic", category: "Kids" },
      { id: 407, name: "Jeem TV HD", language: "Arabic", category: "Kids" },
      { id: 408, name: "Mickey HD", language: "Arabic", category: "Kids" },
      { id: 409, name: "Tom and Jerry HD", language: "English", category: "Kids" },
      { id: 410, name: "Boomerang HD", language: "English/Arabic", category: "Kids" }
    ]
  },
  {
    id: 6,
    name: "Documentary",
    channels: [
      { id: 501, name: "National Geographic HD", language: "English/Arabic", category: "Documentary" },
      { id: 502, name: "National Geographic Abu Dhabi HD", language: "Arabic", category: "Documentary" },
      { id: 503, name: "Discovery Channel HD", language: "English/Arabic", category: "Documentary" },
      { id: 504, name: "Discovery Science HD", language: "English", category: "Documentary" },
      { id: 505, name: "Animal Planet HD", language: "English/Arabic", category: "Documentary" },
      { id: 506, name: "History HD", language: "English/Arabic", category: "Documentary" },
      { id: 507, name: "BBC Earth HD", language: "English", category: "Documentary" },
      { id: 508, name: "Nat Geo Wild HD", language: "English/Arabic", category: "Documentary" },
      { id: 509, name: "Discovery Family HD", language: "English", category: "Documentary" },
      { id: 510, name: "Al Aoula HD", language: "Arabic", category: "Documentary" }
    ]
  },
  {
    id: 7,
    name: "Music",
    channels: [
      { id: 601, name: "Mazzika HD", language: "Arabic", category: "Music" },
      { id: 602, name: "Mazzika 2 HD", language: "Arabic", category: "Music" },
      { id: 603, name: "MCM Top HD", language: "English", category: "Music" },
      { id: 604, name: "MTV Lebanon HD", language: "Arabic", category: "Music" },
      { id: 605, name: "Trace Urban HD", language: "English", category: "Music" },
      { id: 606, name: "MBC Masr 2 HD", language: "Arabic", category: "Music" },
      { id: 607, name: "Rotana Music HD", language: "Arabic", category: "Music" },
      { id: 608, name: "MELODY ARABIA HD", language: "Arabic", category: "Music" },
      { id: 609, name: "4 SHBAB AL ARAB HD", language: "Arabic", category: "Music" },
      { id: 610, name: "Nogoum FM TV HD", language: "Arabic", category: "Music" }
    ]
  },
  {
    id: 8,
    name: "Islamic",
    channels: [
      { id: 701, name: "Iqraa TV HD", language: "Arabic", category: "Islamic" },
      { id: 702, name: "Al Majd TV HD", language: "Arabic", category: "Islamic" },
      { id: 703, name: "Al Resalah HD", language: "Arabic", category: "Islamic" },
      { id: 704, name: "Al Sunnah Al Nabawiyah HD", language: "Arabic", category: "Islamic" },
      { id: 705, name: "Al Quran Al Kareem HD", language: "Arabic", category: "Islamic" },
      { id: 706, name: "Al Nas TV HD", language: "Arabic", category: "Islamic" },
      { id: 707, name: "Al Rahma HD", language: "Arabic", category: "Islamic" },
      { id: 708, name: "Al Fath HD", language: "Arabic", category: "Islamic" },
      { id: 709, name: "Al Hikma HD", language: "Arabic", category: "Islamic" },
      { id: 710, name: "Al Anwar HD", language: "Arabic", category: "Islamic" }
    ]
  },
  {
    id: 9,
    name: "Sports (International)",
    channels: [
      { id: 801, name: "SuperSport 1 HD", language: "English", category: "Sports" },
      { id: 802, name: "SuperSport 2 HD", language: "English", category: "Sports" },
      { id: 803, name: "SuperSport 3 HD", language: "English", category: "Sports" },
      { id: 804, name: "SuperSport 4 HD", language: "English", category: "Sports" },
      { id: 805, name: "SuperSport 5 HD", language: "English", category: "Sports" },
      { id: 806, name: "SuperSport 6 HD", language: "English", category: "Sports" },
      { id: 807, name: "SuperSport 7 HD", language: "English", category: "Sports" },
      { id: 808, name: "SuperSport 8 HD", language: "English", category: "Sports" },
      { id: 809, name: "SuperSport 9 HD", language: "English", category: "Sports" },
      { id: 810, name: "SuperSport 10 HD", language: "English", category: "Sports" }
    ]
  },
  {
    id: 10,
    name: "Regional",
    channels: [
      { id: 901, name: "Algeria TV", language: "Arabic", category: "Regional" },
      { id: 902, name: "Tunisia TV", language: "Arabic/French", category: "Regional" },
      { id: 903, name: "Morocco TV", language: "Arabic/French", category: "Regional" },
      { id: 904, name: "Libya TV", language: "Arabic", category: "Regional" },
      { id: 905, name: "Egypt TV", language: "Arabic", category: "Regional" },
      { id: 906, name: "Saudi TV", language: "Arabic", category: "Regional" },
      { id: 907, name: "UAE TV", language: "Arabic", category: "Regional" },
      { id: 908, name: "Qatar TV", language: "Arabic", category: "Regional" },
      { id: 909, name: "Kuwait TV", language: "Arabic", category: "Regional" },
      { id: 910, name: "Oman TV", language: "Arabic", category: "Regional" }
    ]
  },
  {
    id: 11,
    name: "International",
    channels: [
      { id: 1001, name: "France 24 HD", language: "French/English/Arabic", category: "International" },
      { id: 1002, name: "DW HD", language: "German/English/Arabic", category: "International" },
      { id: 1003, name: "TRT World HD", language: "English", category: "International" },
      { id: 1004, name: "Russia Today HD", language: "English/Arabic", category: "International" },
      { id: 1005, name: "CGTN HD", language: "English/Arabic", category: "International" },
      { id: 1006, name: "Al Jazeera English HD", language: "English", category: "International" },
      { id: 1007, name: "BBC World News HD", language: "English", category: "International" },
      { id: 1008, name: "CNBC HD", language: "English", category: "International" },
      { id: 1009, name: "Bloomberg HD", language: "English", category: "International" },
      { id: 1010, name: "Euronews HD", language: "English/Arabic", category: "International" }
    ]
  },
  {
    id: 12,
    name: "Series & Drama",
    channels: [
      { id: 1101, name: "OSN Series HD", language: "English", category: "Series" },
      { id: 1102, name: "OSN Series Comedy HD", language: "English", category: "Series" },
      { id: 1103, name: "OSN Ya Hala HD", language: "Arabic", category: "Series" },
      { id: 1104, name: "MBC Drama HD", language: "Arabic", category: "Series" },
      { id: 1105, name: "MBC Iraq HD", language: "Arabic", category: "Series" },
      { id: 1106, name: "MBC Masr 2 HD", language: "Arabic", category: "Series" },
      { id: 1107, name: "MBC 4 HD", language: "English", category: "Series" },
      { id: 1108, name: "MBC 2 HD", language: "English", category: "Series" },
      { id: 1109, name: "OSN Series First HD", language: "English", category: "Series" },
      { id: 1110, name: "OSN Series Action HD", language: "English", category: "Series" }
    ]
  }
]

const ChannelsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Flatten all channels with country and category information
  const allChannels = countries.flatMap((country) =>
    country.categories.flatMap((category) =>
      category.channels.map((channel) => ({
        ...channel,
        countryName: country.name,
        categoryName: category.name,
      }))
  );

  // Filter channels based on search term and selected filters
  const filteredChannels = allChannels.filter((channel) => {
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !selectedCountry || channel.countryName === selectedCountry;
    const matchesCategory = !selectedCategory || channel.categoryName === selectedCategory;

    return matchesSearch && matchesCountry && matchesCategory;
  });

  // Get unique countries and categories for dropdowns
  const uniqueCountries = [...new Set(countries.map((country) => country.name))];
  const uniqueCategories = [
    ...new Set(
      countries.flatMap((country) =>
        country.categories.map((cat) => cat.name)
      )
    ),
  ];

  // Get filtered categories based on selected country
  const getFilteredCategories = () => {
    if (!selectedCountry) return uniqueCategories;
    const country = countries.find((c) => c.name === selectedCountry);
    return [...new Set(country?.categories.map((cat) => cat.name) || [])];
  };

  const filteredCategories = getFilteredCategories();

  // Reset category when country changes
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedCategory('');
  };

  return (

  const uniqueCountries = [...new Set(countries.map((country) => country.name))];
  const uniqueCategories = [
    ...new Set(
      countries.flatMap((country) =>
        country.categories.map((cat) => cat.name)
      )
    ),
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[hsl(217,91%,20%)] to-[hsl(217,91%,30%)] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IPTV Channels List</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Browse our extensive collection of TV channels from around the world. Filter by category or search for your favorite channels.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-6">
          <div className="flex flex-col gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search channels..."
                className="w-full pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedCategory(''); // Reset category when country changes
                }}
              >
                <option value="">All Countries</option>
                {uniqueCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
                              <div className="text-sm text-muted-foreground">{channel.language}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                                {channel.category}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start watching?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant access to all these channels and more with our premium IPTV service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-base">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-base">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsList;
