import React from 'react';
import DocRoutePage from './DocRoutePage';
import QuickAadharDownload from '../components/QuickAadharDownload';

const DownloadByNumberMobile = () => {
  return <DocRoutePage routeKey="/by-number-mobile/" afterTitleContent={<QuickAadharDownload />} />;
};

export default DownloadByNumberMobile;
