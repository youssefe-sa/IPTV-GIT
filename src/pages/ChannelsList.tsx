import React, { useMemo } from 'react';

// Types
type Channel = {
  id: string;
  name: string;
  country?: string;
  category?: string;
  groupName?: string;
};

type ChannelGroup = {
  name: string;
  channels: Channel[];
};

// Channel data organized by columns
const channelGroups: ChannelGroup[] = [
  {
    name: 'Column 1',
    channels: [
      { id: 'us-1', name: 'USA 24/7 Shows' },
      { id: 'us-2', name: 'USA Bein Sports', category: 'Sports' },
      { id: 'us-3', name: 'USA Documentary', category: 'Documentary' },
      { id: 'us-4', name: 'USA Entertainment', category: 'Entertainment' },
      { id: 'us-5', name: 'USA ESPN Plus', category: 'Sports' },
      { id: 'us-6', name: 'USA Family & Kids', category: 'Kids' },
      { id: 'us-7', name: 'USA Fox Sports', category: 'Sports' },
      { id: 'us-8', name: 'USA Latin', category: 'Latino' },
      { id: 'us-9', name: 'USA Local – ABC', category: 'General' },
      { id: 'us-10', name: 'USA Local – CBS', category: 'General' },
      { id: 'us-11', name: 'USA Local – CW & MY', category: 'General' },
      { id: 'us-12', name: 'USA Local – FOX', category: 'General' },
      { id: 'us-13', name: 'USA Local – NBC', category: 'News' },
      { id: 'us-14', name: 'PPV-MMA/Boxing/WWE', category: 'Sports' },
      { id: 'us-15', name: 'USA MLB', category: 'Sports' },
      { id: 'us-16', name: 'USA Movies Channels', category: 'Movies' },
      { id: 'us-17', name: 'USA Music', category: 'Music' },
      { id: 'us-18', name: 'USA NBA', category: 'Sports' },
      { id: 'us-19', name: 'USA NCAAF', category: 'Sports' },
      { id: 'us-20', name: 'USA News', category: 'News' },
      { id: 'us-21', name: 'USA NFL', category: 'Sports' },
      { id: 'us-22', name: 'USA PPV & Cinema PPV', category: 'Movies' },
      { id: 'us-23', name: 'USA Sports', category: 'Sports' },
      { id: 'ven-1', name: 'Venezuela', category: 'International' },
      { id: 'viet-1', name: 'Vietnam', category: 'International' },
      { id: 'ukr-1', name: 'Ukraine', category: 'International' },
      { id: 'uru-1', name: 'Uruguay', category: 'International' },
      { id: 'uk-1', name: 'UK Sport', category: 'Sports' }
    ]
  },
  {
    name: 'Column 2',
    channels: [
      { id: 'uk-2', name: 'UK Cloud Sport VIP', category: 'Sports' },
      { id: 'uk-3', name: 'UK Cloud Movies VIP', category: 'Movies' },
      { id: 'uk-4', name: 'UK Movies', category: 'Movies' },
      { id: 'uk-5', name: 'UK General', category: 'General' },
      { id: 'lt-1', name: 'Lithuania', category: 'International' },
      { id: 'mk-1', name: 'Macedonia', category: 'International' },
      { id: 'mt-1', name: 'Malta', category: 'International' },
      { id: 'mx-1', name: 'Mexico', category: 'International' },
      { id: 'netflix-1', name: 'Netflix Premium', category: 'Streaming' },
      { id: 'nl-1', name: 'Netherland', category: 'International' },
      { id: 'ni-1', name: 'Nicaragua', category: 'International' },
      { id: 'no-1', name: 'Norway', category: 'International' },
      { id: 'pk-1', name: 'Pakistan', category: 'International' },
      { id: 'pa-1', name: 'Panama', category: 'International' },
      { id: 'py-1', name: 'Paraguay', category: 'International' },
      { id: 'pe-1', name: 'Peru', category: 'International' },
      { id: 'ph-1', name: 'Philippines', category: 'International' },
      { id: 'pl-1', name: 'Poland', category: 'International' },
      { id: 'pt-1', name: 'Portugal', category: 'International' },
      { id: 'ro-1', name: 'Romania', category: 'International' },
      { id: 'ru-1', name: 'Russia', category: 'International' },
      { id: 'soccer-1', name: 'Soccer Special Events', category: 'Sports' },
      { id: 'za-1', name: 'South Africa', category: 'International' },
      { id: 'es-1', name: 'Spain', category: 'International' },
      { id: 'sports-1', name: 'Sports – Match Center', category: 'Sports' },
      { id: 'se-1', name: 'Sweden', category: 'International' },
      { id: 'ch-1', name: 'Switzerland', category: 'International' },
      { id: 'th-1', name: 'Thailand', category: 'International' },
      { id: 'tr-1', name: 'Turkey', category: 'International' }
    ]
  },
  {
    name: 'Column 3',
    channels: [
      { id: 'cy-1', name: 'Cyprus', category: 'International' },
      { id: 'cz-1', name: 'Czech', category: 'International' },
      { id: 'dk-1', name: 'Denmark', category: 'International' },
      { id: 'do-1', name: 'Dominican', category: 'International' },
      { id: 'ec-1', name: 'Ecuador', category: 'International' },
      { id: 'sv-1', name: 'El Salvador', category: 'International' },
      { id: 'epl-1', name: 'EPL Games', category: 'Sports' },
      { id: 'fi-1', name: 'Finland', category: 'International' },
      { id: 'fr-1', name: 'France Advertisement', category: 'General' },
      { id: 'fr-2', name: 'France Cinema', category: 'Movies' },
      { id: 'fr-3', name: 'France Decouvertes', category: 'Documentary' },
      { id: 'fr-4', name: 'France Enfants', category: 'Kids' },
      { id: 'fr-5', name: 'France General', category: 'General' },
      { id: 'fr-6', name: 'France Info', category: 'News' },
      { id: 'fr-7', name: 'France Music', category: 'Music' },
      { id: 'fr-8', name: 'France Sports', category: 'Sports' },
      { id: 'de-1', name: 'Germany', category: 'International' },
      { id: 'de-2', name: 'Germany Sport', category: 'Sports' },
      { id: 'gr-1', name: 'Greece', category: 'International' },
      { id: 'hn-1', name: 'Honduras', category: 'International' },
      { id: 'hu-1', name: 'Hungary', category: 'International' },
      { id: 'efl-1', name: 'Ifollow EFL', category: 'Sports' },
      { id: 'in-1', name: 'India', category: 'International' },
      { id: 'ir-1', name: 'Iran', category: 'International' },
      { id: 'il-1', name: 'Israel', category: 'International' },
      { id: 'it-1', name: 'Italy', category: 'International' },
      { id: 'kz-1', name: 'Kazakhstan', category: 'International' },
      { id: 'ku-1', name: 'Kurdistan', category: 'International' },
      { id: 'lat-1', name: 'Latino All', category: 'International' }
    ]
  },
  {
    name: 'Column 4',
    channels: [
      { id: 'af-1', name: 'Afghanistan', category: 'International' },
      { id: 'afr-1', name: 'Africa All', category: 'International' },
      { id: 'afr-2', name: 'Africa DSTV', category: 'International' },
      { id: 'afr-3', name: 'Africa Super Sports', category: 'Sports' },
      { id: 'al-1', name: 'Albania', category: 'International' },
      { id: 'arab-1', name: 'Arab All', category: 'International' },
      { id: 'arab-2', name: 'Arab Bein Sports VIP', category: 'Sports' },
      { id: 'arab-3', name: 'Arabic Movie', category: 'Movies' },
      { id: 'ar-1', name: 'Argentina', category: 'International' },
      { id: 'am-1', name: 'Armenia', category: 'International' },
      { id: 'au-1', name: 'Australia', category: 'International' },
      { id: 'at-1', name: 'Austria', category: 'International' },
      { id: 'az-1', name: 'Azerbaijan', category: 'International' },
      { id: 'bd-1', name: 'Bangladesh', category: 'International' },
      { id: 'be-1', name: 'Belgium', category: 'International' },
      { id: 'ba-1', name: 'Bosnia', category: 'International' },
      { id: 'br-1', name: 'Brazil', category: 'International' },
      { id: 'bg-1', name: 'Bulgaria', category: 'International' },
      { id: 'ca-1', name: 'Canada EN', category: 'International' },
      { id: 'ca-2', name: 'Canada FR', category: 'International' },
      { id: 'ca-3', name: 'Canada Kids', category: 'Kids' },
      { id: 'ca-4', name: 'Canada Local', category: 'Local' },
      { id: 'car-1', name: 'Caribbean', category: 'International' },
      { id: 'cl-1', name: 'Chile', category: 'International' },
      { id: 'cn-1', name: 'China', category: 'International' },
      { id: 'co-1', name: 'Colombia', category: 'International' },
      { id: 'hr-1', name: 'Croatia', category: 'International' },
      { id: 'cu-1', name: 'Cuba', category: 'International' },
      { id: 'jp-1', name: 'Japan', category: 'International' },
      { id: 'kr-1', name: 'Korea', category: 'International' },
      { id: 'id-1', name: 'Indonesia', category: 'International' },
      { id: 'my-1', name: 'Malaysia', category: 'International' },
      { id: 'sg-1', name: 'Singapore', category: 'International' },
      { id: 'hk-1', name: 'Hong Kong', category: 'International' },
      { id: 'tw-1', name: 'Taiwan', category: 'International' },
      { id: 'eg-1', name: 'Egypt', category: 'International' },
      { id: 'sa-1', name: 'Saudi Arabia', category: 'International' },
      { id: 'ae-1', name: 'UAE (United Arab Emirates)', category: 'International' },
      { id: 'ie-1', name: 'Ireland', category: 'International' },
      { id: 'gb-sct', name: 'Scotland', category: 'International' },
      { id: 'gb-wls', name: 'Wales', category: 'International' },
      { id: 'car-2', name: 'Caribbean specific islands', category: 'International' },
      { id: 'nz-1', name: 'New Zealand', category: 'International' },
      { id: 'fj-1', name: 'Fiji', category: 'International' },
      { id: 'pg-1', name: 'Papua New Guinea', category: 'International' },
      { id: 'sports-ppv', name: 'PPV-MMA/Boxing/WWE', category: 'Sports' },
      { id: 'soccer-events', name: 'Soccer Special Events', category: 'Sports' },
      { id: 'sports-match', name: 'Sports – Match Center', category: 'Sports' },
      { id: 'epl-games', name: 'EPL Games', category: 'Sports' },
      { id: 'efl-games', name: 'Ifollow EFL', category: 'Sports' }
    ]
  }
];

// Function to split channels into 4 columns
const splitIntoColumns = (channels: Channel[], columns: number): Channel[][] => {
  const result: Channel[][] = [];
  const itemsPerColumn = Math.ceil(channels.length / columns);
  
  for (let i = 0; i < columns; i++) {
    result.push(channels.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
  }
  
  return result;
};

const ChannelsList: React.FC = () => {
  // Flatten all channels from all groups
  const allChannels = React.useMemo(() => {
    return channelGroups.flatMap(group => 
      group.channels.map(channel => ({
        ...channel,
        groupName: group.name
      }))
    );
  }, []);

  // Split into 4 columns
  const columns = React.useMemo(() => {
    return splitIntoColumns(allChannels, 4);
  }, [allChannels]);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">IPTV Channel List</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Discover the complete IPTV channels list from Connect Global IPTV. We offer 18,000+ live TV channels, 150,000+ movies, and 30,000+ shows from the USA, UK, Canada, France, India, and over 115 countries. Get access to 24/7 sports, kids' TV, news, movies, local stations, and more — all in one powerful IPTV subscription.
          </p>
        </div>

        {/* Channel Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-8">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              International IPTV Channels by Region
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          
          {/* 4-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="divide-y divide-gray-200">
                {column.map((channel) => (
                  <div key={channel.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{channel.name}</p>
                        {channel.category && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                            {channel.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Channel List</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Download our complete IPTV channel list in Excel format for offline reference. 
            This comprehensive list includes all our international channels, including sports, 
            movies, series, documentaries, and much more. Regularly updated to provide you 
            with the latest available channels.
          </p>
          <a 
            href="https://docs.google.com/spreadsheets/d/1aNVtSF9Dl7uOXnIBXDC7k9Vqz-trTkta/edit?usp=sharing&ouid=110594854511043649512&rtpof=true&sd=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Full Channel List (Excel)
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This list is provided for informational purposes only and may be subject to change without notice.</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelsList;
