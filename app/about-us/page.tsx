import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

export default function Map() {
  return (
    <html lang="fa">
      <Head>
        <link
          href="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.css"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: '        body {            height: 100vh;            width: 100vw;            margin: 0;        }        #map {            height: 100%;            width: 100%;        }    '
          }}
        />
      </Head>
      <Script src="https://static.neshan.org/sdk/leaflet/v1.9.4/neshan-sdk/v1.0.8/index.js" />
      <body>
        <div id="map" />
        <script
          dangerouslySetInnerHTML={{
            __html: '    const testLMap = new L.Map("map", {        key: "web.90bab6c164df494389844fe9e3718431",        maptype: "neshan",        poi: false,        traffic: false,        center: [35.699756, 51.338076],        zoom: 14,    })'
          }}
        />
      </body>
    </html>
  );
};
