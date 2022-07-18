import { TTicket, TTicketCheck, TTicketPackage } from '@interface/index';

export const ticketData: TTicket[] = [
  {
    key: '1',
    numericalOrder: 1,
    bookingCode: 'ALT20210501',
    ticketNumber: '123456789034',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '2',
    numericalOrder: 2,
    bookingCode: 'ALT20210501',
    ticketNumber: '123456789034',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Chưa sử dụng',
    dateOfUse: '',
    ticketReleaseDate: '14/04/2021',
    checkInGate: '',
  },
  {
    key: '3',
    numericalOrder: 3,
    bookingCode: 'ALT20210501',
    ticketNumber: '123456789034',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Hết hạn',
    dateOfUse: '',
    ticketReleaseDate: '14/04/2021',
    checkInGate: '',
  },
  {
    key: '4',
    numericalOrder: 4,
    bookingCode: 'ALT20210501',
    ticketNumber: '156464891479',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Hết hạn',
    dateOfUse: '',
    ticketReleaseDate: '14/04/2021',
    checkInGate: '',
  },
  {
    key: '5',
    numericalOrder: 5,
    bookingCode: '201649631896',
    ticketNumber: '156464891479',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '6',
    numericalOrder: 6,
    bookingCode: '201649631896',
    ticketNumber: '148920121478',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '7',
    numericalOrder: 7,
    bookingCode: '201649631896',
    ticketNumber: '148920121478',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '8',
    numericalOrder: 8,
    bookingCode: '201649631896',
    ticketNumber: '148920121478',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '9',
    numericalOrder: 9,
    bookingCode: '201649631896',
    ticketNumber: '148920121478',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '10',
    numericalOrder: 10,
    bookingCode: '201649631896',
    ticketNumber: '148920121478',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
];
export const ticketCheckData: TTicketCheck[] = [
  {
    key: '1',
    numericalOrder: 1,
    ticketNumber: '205314876321',
    dateOfUse: '14/04/2021',
    nameOfTypeTicket: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketCheckStatus: 'Chưa đối soát',
  },
  {
    key: '2',
    numericalOrder: 2,
    ticketNumber: '205314801225',
    dateOfUse: '14/04/2021',
    nameOfTypeTicket: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketCheckStatus: 'Chưa đối soát',
  },
  {
    key: '3',
    numericalOrder: 3,
    ticketNumber: '205314897452',
    dateOfUse: '14/04/2021',
    nameOfTypeTicket: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketCheckStatus: 'Chưa đối soát',
  },
  {
    key: '4',
    numericalOrder: 4,
    ticketNumber: '205314897452',
    dateOfUse: '14/04/2021',
    nameOfTypeTicket: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketCheckStatus: 'Đã đối soát',
  },
];
export const ticketPackageData: TTicketPackage[] = [
  {
    key: '1',
    numericalOrder: 1,
    packageID: 'ALT20210501',
    packageName: 'Gói gia đình',
    dateOfUse: {
      date: '14/04/2021',
      time: '08:00:00',
    },
    expirationDate: {
      date: '14/04/2021',
      time: '23:00:00',
    },
    price: 90000,
    comboPrice: 360000,
    status: 'Đang áp dụng',
  },
  {
    key: '2',
    numericalOrder: 2,
    packageID: 'ALT20210501',
    packageName: 'Gói sự kiện',
    dateOfUse: {
      date: '14/04/2021',
      time: '08:00:00',
    },
    expirationDate: {
      date: '14/04/2021',
      time: '23:00:00',
    },
    price: 20000,
    status: 'Tắt',
  },
];
