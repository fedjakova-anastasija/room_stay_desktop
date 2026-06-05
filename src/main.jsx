import React from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import {
  Button,
  Chip,
  SegmentedButtons,
  TextField,
  buttonWidthEnum,
} from '../../Room stay/dist/dist/index.jsx';
import '../../Room stay/dist/dist/theming/booking-form.css';
import './styles.css';
import standardRoomImage from '../../Room stay/img/638905038895238797-b2a3803f-0648-417b-959d-0f86c6768e8b.jpg';
import suiteRoomImage from '../../Room stay/img/638905039312398814-82a5d543-224a-4524-8a0f-b513be82f9bc.jpg';
import mealIcon from '../../Room stay/img/svg/restaurant.svg?raw';
import cancellationIcon from '../../Room stay/img/svg/unlock.svg?raw';
import paymentIcon from '../../Room stay/img/svg/purse.svg?raw';
import guestIcon from '../../Room stay/img/svg/guests-group.svg?raw';
import giftIcon from '../../Room stay/img/svg/gift.svg?raw';
import bathroomIcon from '../../Room stay/img/svg/features/bathroom.svg';
import doubleBedIcon from '../../Room stay/img/svg/features/double_bed.svg';
import balconyIcon from '../../Room stay/img/svg/features/balcony.svg';
import airConditioningIcon from '../../Room stay/img/svg/features/air_conditioning.svg';
import hairdryerIcon from '../../Room stay/img/svg/features/hairdryer.svg';
import viewIcon from '../../Room stay/img/svg/features/view.svg';
import kingBedIcon from '../../Room stay/img/svg/features/king_bed.svg';
import lockIcon from '../../Room stay/img/svg/features/electronic_locks.svg';
import wifiIcon from '../../Room stay/img/svg/features/wifi.svg';
import arrowDownIcon from '../../Room stay/img/svg/arrow-down.svg';
import arrowLeftIcon from '../../Room stay/img/svg/arrow-left.svg';
import arrowRightIcon from '../../Room stay/img/svg/arrow-right.svg';
import validIcon from '../../Room stay/img/svg/valid.svg';
import crossIcon from '../../Room stay/img/svg/cross.svg';
import tariffArrowDownIcon from '../../Room stay/img/svg/arrow-down.svg?raw';
import tooltipCrossIcon from '../../Room stay/img/svg/cross.svg?raw';
import areaMetaIcon from '../../Room stay/img/svg/area.svg?raw';
import roomsMetaIcon from '../../Room stay/img/svg/rooms.svg?raw';
import petsFriendlyIcon from '../../Room stay/img/svg/features/pets_friendly.svg?raw';
import noMosquitoIcon from '../../Room stay/img/svg/features/no_mosquito.svg?raw';
import singleBedIcon from '../../Room stay/img/svg/features/single_bed.svg?raw';
import airConditioningDetailIcon from '../../Room stay/img/svg/features/air_conditioning.svg?raw';
import doubleBedDetailIcon from '../../Room stay/img/svg/features/double_bed.svg?raw';
import kingBedDetailIcon from '../../Room stay/img/svg/features/king_bed.svg?raw';
import viewDetailIcon from '../../Room stay/img/svg/features/view.svg?raw';
import lockDetailIcon from '../../Room stay/img/svg/features/electronic_locks.svg?raw';
import wifiDetailIcon from '../../Room stay/img/svg/features/wifi.svg?raw';
import galleryIcon from '../../Room stay/img/svg/gallery.svg?raw';

const routes = {
  list: '#/desktop',
  checkout: '#/desktop/checkout',
  success: '#/desktop/success',
};

const roomImages = {
  standard: standardRoomImage,
  suite: suiteRoomImage,
};

const filters = [
  {
    key: 'bedType',
    label: 'Тип кровати',
    type: 'multi',
    scope: 'room',
    options: [
      { value: 'double', label: 'Двуспальная кровать' },
      { value: 'single', label: 'Односпальная кровать' },
    ],
  },
  {
    key: 'view',
    label: 'Вид из окна',
    type: 'multi',
    scope: 'room',
    options: [
      { value: 'mountain', label: 'Вид на горы' },
      { value: 'river', label: 'Вид на реку' },
    ],
  },
  { key: 'balcony', label: 'Балкон', type: 'single', scope: 'room' },
  { key: 'freeCancellation', label: 'Бесплатная отмена', type: 'single', scope: 'rate' },
  { key: 'noPrepayment', label: 'Без предоплаты', type: 'single', scope: 'rate' },
];

const initialFilterState = {
  bedType: [],
  view: [],
  balcony: false,
  freeCancellation: false,
  noPrepayment: false,
};

const rooms = [
  {
    id: 'suite',
    image: roomImages.suite,
    name: 'Люкс',
    listTitle: 'Люкс',
    params: '32 кв.м · до 3 мест',
    capacityLabel: 'Вместимость до 3 мест',
    area: '32 м²',
    roomCount: '1 комн.',
    guests: '1 большая двуспальная кровать',
    stockLabel: 'Остался 1 номер',
    photoCount: 5,
    filterTags: {
      bedType: ['double'],
      view: ['mountain'],
      balcony: false,
    },
    photoFeatures: [viewIcon, kingBedIcon, airConditioningIcon, lockIcon, wifiIcon],
    detailFeatureBadges: [
      { icon: viewDetailIcon, label: 'Вид из окна' },
      { icon: airConditioningDetailIcon, label: 'Кондиционер' },
      { icon: kingBedDetailIcon, label: 'Большая двуспальная кровать' },
      { icon: wifiDetailIcon, label: 'Wi-Fi' },
      { icon: lockDetailIcon, label: 'Электронный замок' },
    ],
    detailDescription:
      'Номер повышенной категории с расширенным набором оснащения. Иконки в карточке помогают быстро сравнить ключевые преимущества номера.',
    detailSections: [
      {
        title: 'Размещение',
        items: ['Большая двуспальная кровать', 'Поздний выезд по запросу'],
      },
      {
        title: 'Оборудование и электроника',
        items: ['Кондиционер', 'Сейф в номере', 'Электронные замки'],
      },
      {
        title: 'Интернет/телефония',
        items: ['Высокоскоростной Wi-Fi'],
      },
    ],
    summaryFeatures: ['до 3 мест', '32 м²', '1 комн.'],
    rates: [
      {
        id: 'suite-basic-prepay',
        meal: 'Питание не включено',
        cancellation: 'Бесплатная отмена',
        payment: 'Нужна предоплата',
        price: 8000,
        oldPrice: 16000,
        discount: '-50%',
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['Бассейн', 'Пляж'],
        tooltipServiceTitles: ['Бассейн', 'Пляж', 'SPA-зона', 'Прокат велосипедов', 'Парковка'],
        detailHighlights: ['Бассейн', 'Пляж', 'SPA-зона', 'Прокат велосипедов'],
        tooltipDetails: {
          meal: {
            title: 'Питание не включено',
            text: 'Питание в стоимость не входит. Его можно добавить на следующем шаге.',
          },
          cancellation: {
            title: 'Бесплатная отмена',
            text: 'Бесплатная отмена бронирования возможна до 21.12.2026 0:00 (UTC +03:00).',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Нужна предоплата. Для подтверждения бронирования требуется оплата банковской картой.',
          },
        },
      },
      {
        id: 'suite-breakfast-flex',
        meal: 'Завтрак',
        cancellation: 'Условия отмены',
        payment: 'Без предоплаты',
        price: 9600,
        oldPrice: 12000,
        discount: '-20%',
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['Сейф', 'Поздний выезд'],
        tooltipServiceTitles: ['Сейф', 'Поздний выезд', 'Коворкинг-зона', 'Бизнес-центр', 'Конференц-зал'],
        detailHighlights: ['Сейф в номере', 'Поздний выезд до 14:00', 'Коворкинг-зона'],
        tooltipDetails: {
          meal: {
            title: 'Завтрак',
            text: 'Завтрак включен в стоимость тарифа для всех гостей.',
          },
          cancellation: {
            title: 'Условия отмены',
            text: 'Бесплатная отмена невозможна. При отмене бронирования взимается стоимость первых суток проживания.',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Без предоплаты. Оплата производится при заселении.',
          },
        },
      },
      {
        id: 'suite-breakfast-premium',
        meal: 'Завтрак',
        cancellation: 'Условия отмены',
        payment: 'Без предоплаты',
        price: 12000,
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['Бассейн', 'Парковка'],
        tooltipServiceTitles: ['Бассейн', 'Парковка', 'Пляж', 'Массажные кабинеты'],
        detailHighlights: ['Бассейн', 'Пляж', 'Парковка', 'Массажные кабинеты'],
        tooltipDetails: {
          meal: {
            title: 'Завтрак',
            text: 'Завтрак включен в стоимость тарифа для всех гостей.',
          },
          cancellation: {
            title: 'Условия отмены',
            text: 'Бесплатная отмена невозможна. При отмене бронирования взимается стоимость первых суток проживания.',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Без предоплаты. Оплата производится при заселении.',
          },
        },
      },
      {
        id: 'suite-all-inclusive-flex',
        meal: 'Питание «Все включено»',
        cancellation: 'Бесплатная отмена',
        payment: 'Без предоплаты',
        price: 13200,
        oldPrice: 15000,
        discount: '-12%',
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['SPA-зона', 'Парковка'],
        tooltipServiceTitles: ['SPA-зона', 'Парковка', 'Пляж', 'Бассейн'],
        detailHighlights: ['SPA-зона', 'Парковка', 'Бассейн'],
        tooltipDetails: {
          meal: { title: 'Все включено', text: 'Тариф включает расширенный пакет питания.' },
          cancellation: { title: 'Бесплатная отмена', text: 'Бесплатная отмена доступна до даты, указанной в правилах бронирования.' },
          payment: { title: 'Способы оплаты', text: 'Без предоплаты. Оплата производится при заселении.' },
        },
      },
      {
        id: 'suite-breakfast-prepay',
        meal: 'Завтрак',
        cancellation: 'Бесплатная отмена',
        payment: 'Нужна предоплата',
        price: 10400,
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['Сейф', 'Бассейн'],
        tooltipServiceTitles: ['Сейф', 'Бассейн', 'Парковка', 'Поздний выезд'],
        detailHighlights: ['Сейф', 'Бассейн'],
        tooltipDetails: {
          meal: { title: 'Завтрак', text: 'Завтрак включен в стоимость тарифа для всех гостей.' },
          cancellation: { title: 'Бесплатная отмена', text: 'Бесплатная отмена доступна до даты, указанной в правилах бронирования.' },
          payment: { title: 'Способы оплаты', text: 'Нужна предоплата для подтверждения бронирования.' },
        },
      },
    ],
  },
  {
    id: 'standard-family',
    image: roomImages.standard,
    name: 'Трёхместный семейный номер Standard',
    listTitle: '2 × Трёхместный семейный номер Standard',
    params: '30 кв.м · до 5 мест',
    capacityLabel: 'Вместимость до 5 мест',
    area: '30 м²',
    roomCount: '1 комн.',
    guests: '1 двуспальная кровать · 1 диван',
    stockLabel: 'На нашем сайте осталось 2 номера',
    photoCount: 7,
    filterTags: {
      bedType: ['double'],
      view: ['river'],
      balcony: true,
    },
    photoFeatures: [bathroomIcon, doubleBedIcon, balconyIcon, airConditioningIcon, hairdryerIcon],
    detailFeatureBadges: [
      { icon: noMosquitoIcon, label: 'Москитная сетка' },
      { icon: petsFriendlyIcon, label: 'Можно с питомцами' },
      { icon: airConditioningDetailIcon, label: 'Кондиционер' },
      { icon: singleBedIcon, label: 'Односпальная кровать' },
      { icon: doubleBedDetailIcon, label: 'Двуспальная кровать' },
    ],
    detailDescription:
      'Приоритетные элементы оснащения - это иконки оснащения, которые выделяются в карточке номера и помогают гостю быстро выбрать подходящий вариант.',
    detailSections: [
      {
        title: 'Размещение с питомцами',
        items: ['Можно с питомцами', 'Допускается размещение с собаками весом до 8 кг. Стоимость услуги - 1500 рублей в сутки.'],
      },
      {
        title: 'Видео/аудио',
        items: ['Спутниковое телевидение', 'Домашний кинотеатр'],
      },
      {
        title: 'Интернет/телефония',
        items: ['Wi-Fi в номере', 'Телефон'],
      },
    ],
    summaryFeatures: ['до 5 мест', '20 м²', '1 комн.'],
    rates: [
      {
        id: 'standard-basic-flex',
        meal: 'Питание не включено',
        cancellation: 'Бесплатная отмена',
        payment: 'Без предоплаты',
        price: 2600,
        oldPrice: 4000,
        discount: '-35%',
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['Бассейн', 'Парковка'],
        tooltipServiceTitles: ['Бассейн', 'Парковка', 'Пляж', 'SPA-зона', 'Прокат спортивного инвентаря'],
        detailHighlights: ['Открытый бассейн', 'Парковка на территории'],
        tooltipDetails: {
          meal: {
            title: 'Питание не включено',
            text: 'Питание в стоимость не входит. Услуги питания можно добавить на следующем шаге.',
          },
          cancellation: {
            title: 'Бесплатная отмена',
            text: 'Бесплатная отмена бронирования возможна до 21.12.2026 0:00 (UTC +03:00).',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Без предоплаты. Оплата производится при заселении.',
          },
        },
      },
      {
        id: 'standard-basic-prepay',
        meal: 'Завтрак "Английский"',
        cancellation: 'Условия отмены',
        payment: 'Нужна предоплата',
        price: 3400,
        oldPrice: 4000,
        discount: '-15%',
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['Пляж', 'Тренажерный зал'],
        tooltipServiceTitles: ['Пляж', 'Тренажерный зал', 'Парковка', 'Коворкинг-зона', 'Бизнес-центр'],
        detailHighlights: ['Доступ на пляж', 'Тренажерный зал'],
        tooltipDetails: {
          meal: {
            title: 'Завтрак',
            text: 'Английский завтрак включен в стоимость тарифа.',
          },
          cancellation: {
            title: 'Условия отмены',
            text: 'Бесплатная отмена невозможна. При отмене бронирования взимается стоимость первых суток проживания.',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Нужна предоплата. Для подтверждения бронирования потребуется оплата банковской картой.',
          },
        },
      },
      {
        id: 'standard-breakfast',
        meal: 'Питание «Все включено»',
        cancellation: 'Бесплатная отмена',
        payment: 'Без предоплаты',
        price: 4000,
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['Фитнес-зал', 'Бизнес-центр'],
        tooltipServiceTitles: ['Фитнес-зал', 'Бизнес-центр', 'Пляж', 'SPA-зона', 'Массажные кабинеты'],
        detailHighlights: ['Фитнес-зал', 'Бизнес-центр'],
        tooltipDetails: {
          meal: {
            title: 'Все включено',
            text: 'Всем гостям доступны завтрак, обед и ужин.',
          },
          cancellation: {
            title: 'Бесплатная отмена',
            text: 'Бесплатная отмена бронирования возможна до 21.12.2026 0:00 (UTC +03:00).',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'При заселении. Предварительная оплата не требуется.',
          },
        },
      },
      {
        id: 'standard-half-board',
        meal: 'Полупансион (завтрак и ужин)',
        cancellation: 'Бесплатная отмена',
        payment: 'Без предоплаты',
        price: 4200,
        oldPrice: 5200,
        discount: '-19%',
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['Бассейн', 'Терраса'],
        tooltipServiceTitles: ['Бассейн', 'Терраса', 'Парковка', 'SPA-зона'],
        detailHighlights: ['Бассейн', 'Терраса', 'Парковка'],
        tooltipDetails: {
          meal: { title: 'Полупансион', text: 'В тариф включены завтрак и ужин.' },
          cancellation: { title: 'Бесплатная отмена', text: 'Бесплатная отмена доступна до даты, указанной в правилах бронирования.' },
          payment: { title: 'Способы оплаты', text: 'Без предоплаты. Оплата производится при заселении.' },
        },
      },
      {
        id: 'standard-breakfast-prepay-plus',
        meal: 'Завтрак',
        cancellation: 'Условия отмены',
        payment: 'Нужна предоплата',
        price: 3600,
        taxes: 'Налоги и сборы включены',
        cardServiceTitles: ['Пляж', 'Сауна'],
        tooltipServiceTitles: ['Пляж', 'Сауна', 'Тренажерный зал', 'Парковка'],
        detailHighlights: ['Пляж', 'Сауна'],
        tooltipDetails: {
          meal: { title: 'Завтрак', text: 'Завтрак включен в стоимость тарифа.' },
          cancellation: { title: 'Условия отмены', text: 'Бесплатная отмена невозможна. Действуют штрафные условия.' },
          payment: { title: 'Способы оплаты', text: 'Нужна предоплата для подтверждения бронирования.' },
        },
      },
    ],
  },
];

const bookingForItems = [
  { id: 'self', label: 'Для себя', value: 'self' },
  { id: 'other', label: 'Для другого', value: 'other' },
];

function App() {
  const [route, setRoute] = React.useState(getRouteFromHash);
  const [bookingFor, setBookingFor] = React.useState('self');
  const [activeFilters, setActiveFilters] = React.useState(initialFilterState);
  const [openFilterKey, setOpenFilterKey] = React.useState(null);
  const [rateDetails, setRateDetails] = React.useState(null);
  const [roomDetails, setRoomDetails] = React.useState(null);
  const [selectedOffer, setSelectedOffer] = React.useState(() => ({ room: rooms[0], rate: rooms[0].rates[0] }));

  React.useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = routes.list;
    }

    const handleHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filteredRooms = rooms
    .map((room) => ({
      ...room,
      rates: room.rates.filter((rate) => matchesRateFilters(rate, activeFilters)),
    }))
    .filter((room) => matchesRoomFilters(room, activeFilters) && room.rates.length > 0);

  React.useEffect(() => {
    const stillVisible = filteredRooms.some((room) => room.id === selectedOffer.room.id && room.rates.some((rate) => rate.id === selectedOffer.rate.id));
    if (!stillVisible && filteredRooms.length > 0) {
      setSelectedOffer({ room: filteredRooms[0], rate: filteredRooms[0].rates[0] });
    }
  }, [filteredRooms, selectedOffer]);

  const handleSelectRate = (room, rate, goCheckout = false) => {
    setSelectedOffer({ room, rate });
    if (goCheckout) {
      window.location.hash = routes.checkout;
    }
  };

  return (
    <div className="desktop-shell">
      <DesktopSearchBar muted={route === 'checkout'} />

      {route === 'list' ? (
        <>
          <DesktopSectionHeader title="Выберите номер" />
          <div className="desktop-page-body">
            <div className="desktop-filters-block">
              <div className="desktop-filters-row">
                {filters.map((filter) => (
                  <FilterChip
                    active={isFilterActive(filter, activeFilters)}
                    filter={filter}
                    key={filter.key}
                    onClear={(filterKey) => {
                      setActiveFilters((prev) => ({
                        ...prev,
                        [filterKey]: Array.isArray(prev[filterKey]) ? [] : false,
                      }));
                      if (openFilterKey === filterKey) {
                        setOpenFilterKey(null);
                      }
                    }}
                    onClick={(chipFilter) => {
                      if (chipFilter.type === 'single') {
                        setActiveFilters((prev) => ({
                          ...prev,
                          [chipFilter.key]: !prev[chipFilter.key],
                        }));
                        setOpenFilterKey(null);
                        return;
                      }

                      setOpenFilterKey((prev) => (prev === chipFilter.key ? null : chipFilter.key));
                    }}
                    open={openFilterKey === filter.key}
                    value={activeFilters[filter.key]}
                  />
                ))}
              </div>

              {openFilterKey ? (
                <FilterDropdown
                  filter={filters.find((filter) => filter.key === openFilterKey)}
                  onToggleOption={(filterKey, optionValue) => {
                    setActiveFilters((prev) => {
                      const nextValues = prev[filterKey].includes(optionValue)
                        ? prev[filterKey].filter((value) => value !== optionValue)
                        : [...prev[filterKey], optionValue];

                      return {
                        ...prev,
                        [filterKey]: nextValues,
                      };
                    });
                  }}
                  selectedValues={activeFilters[openFilterKey]}
                />
              ) : null}
            </div>

            <div className="desktop-room-list">
              {filteredRooms.map((room) => (
                <DesktopRoomRow
                  key={room.id}
                  onBook={handleSelectRate}
                  onOpenRateDetails={setRateDetails}
                  onOpenRoomDetails={setRoomDetails}
                  onSelect={handleSelectRate}
                  room={room}
                  selectedOffer={selectedOffer}
                />
              ))}
              {filteredRooms.length === 0 ? <EmptyState onReset={() => setActiveFilters(initialFilterState)} /> : null}
            </div>
          </div>
        </>
      ) : route === 'checkout' ? (
        <CheckoutScreen
          bookingFor={bookingFor}
          onBack={() => {
            window.location.hash = routes.list;
          }}
          onBookingForChange={setBookingFor}
          onSubmit={() => {
            window.location.hash = routes.success;
          }}
          selectedOffer={selectedOffer}
        />
      ) : (
        <SuccessScreen
          onBack={() => {
            window.location.hash = routes.list;
          }}
        />
      )}

      {rateDetails ? <RateDetailsModal onClose={() => setRateDetails(null)} rate={rateDetails} /> : null}
      {roomDetails ? <RoomDetailsModal onClose={() => setRoomDetails(null)} room={roomDetails} /> : null}
    </div>
  );
}

function DesktopSearchBar({ muted }) {
  return (
    <div className={`desktop-page-body desktop-search-topline ${muted ? 'desktop-search-summary-muted' : ''}`}>
      <div className="desktop-search-summary">
        <div className="desktop-search-field-block desktop-search-field-wide">
          <div className="search-label">Заезд - Выезд</div>
          <div className="search-value-row">
            <div className="search-value">24 декабря - 25 декабря</div>
            <div className="calendar-icon" aria-hidden="true" />
          </div>
        </div>
        <div className="desktop-search-field-block desktop-search-field-wide">
          <div className="search-label">Гости</div>
          <div className="search-value-row">
            <div className="search-value">2 взрослых</div>
            <div className="chevron-icon" aria-hidden="true" />
          </div>
        </div>

        <div className="desktop-search-top-actions">
          <div className="desktop-header-promo-link">Ввести промокод</div>
          <div className="desktop-utility-chip flag-chip">
            <span className="flag-icon" aria-hidden="true" />
          </div>
          <div className="desktop-utility-chip currency-chip">RUB</div>
          <div className="desktop-login-wrap">
            <div className="desktop-utility-icon user-icon" aria-hidden="true" />
            <span>Войти</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopSectionHeader({ onBack, title }) {
  return (
    <div className="desktop-section-header-wrap">
      <div className="desktop-page-body desktop-section-header-row">
        <div className="desktop-section-header">
          {onBack ? (
            <button className="desktop-back-link" onClick={onBack.handler} type="button">
              <SvgIcon className="desktop-back-link-icon" icon={arrowLeftIcon} />
              <span>{onBack.label || 'Назад'}</span>
            </button>
          ) : null}
          <h1>{title}</h1>
        </div>
      </div>
      <div className="section-divider" />
    </div>
  );
}

function DesktopRoomRow({ onBook, onOpenRateDetails, onOpenRoomDetails, room }) {
  const sliderRef = React.useRef(null);

  return (
    <article className="desktop-room-row">
      <div className="desktop-room-summary-card">
        <div className="room-image-wrap">
          <img alt={room.name} className="room-image" src={room.image} />
        </div>

        <div className="desktop-room-summary-body">
          <h2>{room.name}</h2>
          <div className="desktop-room-summary-meta">
            {room.summaryFeatures.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="desktop-room-summary-beds">{room.guests}</div>
          <div className="desktop-room-summary-chips">
            {room.detailFeatureBadges.slice(0, 2).map((feature) => (
              <div className="desktop-room-summary-chip" key={feature.label}>
                <SvgInlineIcon className="desktop-room-summary-chip-icon" icon={feature.icon} />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
          <button className="desktop-room-summary-link" onClick={() => onOpenRoomDetails(room)} type="button">
            <span>Подробнее</span>
            <SvgInlineIcon className="desktop-room-summary-link-icon" icon={tariffArrowDownIcon} />
          </button>
        </div>
      </div>

      <div className="desktop-room-tariffs-panel">
        <div className="desktop-rates-slider-shell">
          <button className="desktop-slider-arrow desktop-slider-arrow-left" onClick={() => scrollRates(sliderRef.current, -260)} type="button" aria-label="Назад">
            <SvgIcon className="desktop-slider-arrow-icon" icon={arrowLeftIcon} />
          </button>
          <div className="rates-slider desktop-rates-slider" ref={sliderRef} role="region" aria-label={`Тарифы для ${room.name}`}>
            {room.rates.map((rate) => (
              <RateCard
                key={rate.id}
                onOpenDetails={() => onOpenRateDetails(rate)}
                onSelect={() => onBook(room, rate, true)}
                rate={rate}
              />
            ))}
          </div>
          <button className="desktop-slider-arrow desktop-slider-arrow-right" onClick={() => scrollRates(sliderRef.current, 260)} type="button" aria-label="Вперед">
            <SvgIcon className="desktop-slider-arrow-icon" icon={arrowRightIcon} />
          </button>
        </div>
      </div>
    </article>
  );
}

function RateCard({ onOpenDetails, onSelect, rate }) {
  const [activeTooltip, setActiveTooltip] = React.useState(null);
  const featureButtonRefs = React.useRef({});
  const priceButtonRef = React.useRef(null);
  const servicesButtonRef = React.useRef(null);
  const tooltipServices = rate.tooltipServiceTitles || [];
  const baseVisibleServices = (rate.cardServiceTitles || []).slice(0, 2);
  const visibleServices = baseVisibleServices.length > 1 && baseVisibleServices.join(', ').length > 18 ? baseVisibleServices.slice(0, 1) : baseVisibleServices;
  const hiddenServicesCount = Math.max(0, tooltipServices.length - visibleServices.length);
  const features = [
    { key: 'meal', text: rate.meal, benefit: rate.meal !== 'Питание не включено', icon: mealIcon },
    { key: 'cancellation', text: rate.cancellation, benefit: rate.cancellation === 'Бесплатная отмена', icon: cancellationIcon },
    { key: 'payment', text: rate.payment, benefit: rate.payment === 'Без предоплаты', icon: paymentIcon },
  ];

  return (
    <div className="rate-card tariff-compare-card desktop-rate-card">
      <div className="rate-feature-list">
        {features.map((feature) => (
          <div key={feature.key} className="rate-feature-wrap">
            <button
              className="rate-feature rate-feature-button"
              onClick={() => {
                setActiveTooltip((prev) => (prev === feature.key ? null : feature.key));
              }}
              ref={(node) => {
                featureButtonRefs.current[feature.key] = node;
              }}
              type="button"
            >
              <SvgInlineIcon className={`rate-feature-icon ${feature.benefit ? 'rate-feature-icon-benefit' : ''}`} icon={feature.icon} />
              <span className="rate-feature-text">{feature.text}</span>
            </button>
            {activeTooltip === feature.key ? (
              <InlineTooltip anchor="feature" anchorRef={featureButtonRefs.current[feature.key]} onClose={() => setActiveTooltip(null)} title={rate.tooltipDetails[feature.key].title}>
                {rate.tooltipDetails[feature.key].text}
              </InlineTooltip>
            ) : null}
          </div>
        ))}
        {visibleServices.length > 0 ? (
          <div className="rate-feature-wrap">
            <div className="rate-feature rate-feature-services">
              <SvgInlineIcon className="rate-feature-icon rate-feature-icon-benefit" icon={giftIcon} />
              <div className="rate-feature-services-text">
                <span>{visibleServices.join(', ')}</span>
                {hiddenServicesCount > 0 ? (
                  <button className="rate-feature-spoiler" onClick={() => setActiveTooltip((prev) => (prev === 'services' ? null : 'services'))} ref={servicesButtonRef} type="button">
                    + еще {hiddenServicesCount}
                  </button>
                ) : null}
              </div>
            </div>
            {activeTooltip === 'services' ? (
              <InlineTooltip anchor="feature" anchorRef={servicesButtonRef.current} onClose={() => setActiveTooltip(null)} title="Услуги по тарифу">
                <div className="services-tooltip-list">
                  {tooltipServices.map((service) => (
                    <div key={service}>{service}</div>
                  ))}
                </div>
              </InlineTooltip>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="tariff-card-head">
        <button className="tariff-details-button" onClick={onOpenDetails} type="button">
          <span>Подробнее</span>
          <SvgInlineIcon className="tariff-title-icon" icon={tariffArrowDownIcon} />
        </button>
      </div>
      <div className="rate-price-block">
        <div className="rate-price-caption">Стоимость за 2 дня</div>
        <div className="rate-taxes top-rate-taxes">{rate.taxes}</div>
        <div className="tariff-price-inline">
          <div className="tariff-discount-row tariff-discount-row-fixed">
            {rate.discount && rate.oldPrice ? <span className="room-discount">{rate.discount}</span> : null}
            {rate.discount && rate.oldPrice ? <span className="room-old-price">{formatPrice(rate.oldPrice)}</span> : null}
          </div>
          <div className="tariff-price-row">
            <SvgInlineIcon className="tariff-guest-icon" icon={guestIcon} />
            <div className="rate-price">{formatPrice(rate.price)}</div>
            <button className="tariff-info-button" onClick={() => setActiveTooltip((prev) => (prev === 'price' ? null : 'price'))} ref={priceButtonRef} type="button" aria-label="Детализация цены">
              <span className="tariff-info-icon">i</span>
            </button>
          </div>
          {activeTooltip === 'price' ? (
            <InlineTooltip anchor="price" anchorRef={priceButtonRef.current} onClose={() => setActiveTooltip(null)} title="Детализация цены, ₽" wide>
              <div>24 декабря - 25 декабря, 2 дня</div>
              <div>2 взрослых - {formatPrice(Math.round(rate.price / 2))} за день</div>
              <div className="price-tooltip-divider" />
              <div className="price-tooltip-heading">Стоимость дома</div>
              <div className="price-tooltip-total-row">
                <span>за весь период проживания</span>
                <strong>{formatNumberWithDecimals(rate.price)}</strong>
              </div>
              <div className="price-tooltip-taxes">{rate.taxes}</div>
            </InlineTooltip>
          ) : null}
        </div>
        <div className="desktop-rate-actions-row">
          <div className="tariff-button-wrap tariff-button-wrap-full">
            <Button form="round" onClick={onSelect} size="m" variant="primary" width={buttonWidthEnum.full}>
              Забронировать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InlineTooltip({ anchor, anchorRef, children, onClose, title, wide }) {
  const tooltipRef = React.useRef(null);
  const [position, setPosition] = React.useState(null);

  React.useLayoutEffect(() => {
    if (!anchorRef || !tooltipRef.current) {
      return undefined;
    }

    const updatePosition = () => {
      if (!anchorRef || !tooltipRef.current) {
        return;
      }

      const anchorRect = anchorRef.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportPadding = 12;
      const left = Math.min(
        Math.max(viewportPadding, anchorRect.left),
        window.innerWidth - tooltipRect.width - viewportPadding,
      );

      if (anchor === 'price') {
        setPosition({
          arrowLeft: Math.max(20, Math.min(anchorRect.left + anchorRect.width / 2 - left, tooltipRect.width - 20)),
          left,
          top: Math.max(viewportPadding, anchorRect.top - tooltipRect.height - 10),
        });
        return;
      }

      setPosition({
        arrowLeft: Math.max(20, Math.min(anchorRect.left + 30 - left, tooltipRect.width - 20)),
        left,
        top: anchorRect.bottom + 10,
      });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [anchor, anchorRef]);

  if (!anchorRef) {
    return null;
  }

  return createPortal(
    <div className={`inline-tooltip-portal inline-tooltip-${anchor} ${wide ? 'inline-tooltip-wide' : ''}`} ref={tooltipRef} style={position ? { left: position.left, top: position.top } : { visibility: 'hidden' }}>
      <div className="inline-tooltip-header">
        <div>{title}</div>
        <button className="inline-tooltip-close" onClick={onClose} type="button" aria-label="Закрыть">
          <SvgInlineIcon className="rate-details-close-icon" icon={tooltipCrossIcon} />
        </button>
      </div>
      <div className="inline-tooltip-body">{children}</div>
      <div className="inline-tooltip-arrow" style={position ? { left: position.arrowLeft } : undefined} />
    </div>,
    document.body,
  );
}

function RateDetailsModal({ onClose, rate }) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Описание тарифа">
      <div className="rate-details-modal">
        <div className="rate-details-header">
          <h2>Подробнее о тарифе</h2>
          <button className="rate-details-close" onClick={onClose} type="button" aria-label="Закрыть">
            <SvgInlineIcon className="rate-details-close-icon" icon={tooltipCrossIcon} />
          </button>
        </div>
        <div className="rate-details-body">
          <p>Тариф включает проживание для 2 гостей на 2 дня в выбранной категории номера.</p>
          <p>Питание: {rate.meal}.</p>
          <p>Отмена: {rate.cancellation}. Условия возврата зависят от даты отмены и применяются по правилам бронирования.</p>
          <p>Оплата: {rate.payment}. После выбора тарифа вы сможете перейти к оформлению бронирования и проверить детали заказа.</p>
          <p>В стоимость входят налоги и сборы согласно условиям текущего предложения, если не указано иное.</p>
          <div className="rate-details-list-wrap">
            <div className="rate-details-list-title">В тариф включено</div>
            <ul className="rate-details-list">
              {rate.detailHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoomDetailsModal({ onClose, room }) {
  return (
    <div className="modal-overlay room-modal-overlay" role="dialog" aria-modal="true" aria-label="Описание номера">
      <div className="room-details-modal">
        <div className="room-details-header">
          <h2>{room.listTitle}</h2>
          <button className="rate-details-close" onClick={onClose} type="button" aria-label="Закрыть">
            <SvgInlineIcon className="rate-details-close-icon" icon={tooltipCrossIcon} />
          </button>
        </div>
        <div className="room-details-scroll">
          <img alt={room.listTitle} className="room-details-image" src={room.image} />

          <div className="room-details-meta">
            <div className="room-details-capacity-row">
              <SvgInlineIcon className="room-details-meta-icon" icon={guestIcon} />
              <strong>{room.capacityLabel}</strong>
            </div>
            <div className="room-details-submeta-row">
              <div className="room-details-submeta-item">
                <SvgInlineIcon className="room-details-meta-icon" icon={areaMetaIcon} />
                <span>{room.area}</span>
              </div>
              <div className="room-details-submeta-item">
                <SvgInlineIcon className="room-details-meta-icon" icon={roomsMetaIcon} />
                <span>{room.roomCount}</span>
              </div>
            </div>
          </div>

          <div className="room-details-badges">
            {room.detailFeatureBadges.map((feature) => (
              <div className="room-details-badge" key={feature.label}>
                <SvgInlineIcon className="room-details-badge-icon" icon={feature.icon} />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="room-details-description">{room.detailDescription}</div>

          <div className="room-details-sections">
            {room.detailSections.map((section) => (
              <div className="room-details-section" key={section.title}>
                <h3>{section.title}</h3>
                <div className="room-details-section-items">
                  {section.items.map((item) => (
                    <div className="room-details-section-item" key={item}>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckoutScreen({ bookingFor, onBack, onBookingForChange, onSubmit, selectedOffer }) {
  const { room, rate } = selectedOffer;

  return (
    <>
      <DesktopSectionHeader onBack={{ label: 'К услугам', handler: onBack }} title="Введите данные гостей" />
      <div className="desktop-page-body desktop-checkout-layout">
        <div className="desktop-checkout-main">
          <div className="checkout-card guest-form-card desktop-checkout-card">
            <h2>Введите свои данные</h2>
            <div className="field-caption">Я бронирую</div>
            <div className="desktop-segmented-wrap">
              <SegmentedButtons
                fullWidth={false}
                hasError={false}
                items={bookingForItems}
                name="booking-for"
                onChangeAction={onBookingForChange}
                value={bookingFor}
              />
            </div>

            <div className="auth-copy">Авторизуйтесь удобным способом - данные заполнятся автоматически. Или введите их вручную.</div>

            <div className="auth-icons-row desktop-auth-icons-align">
              <div className="auth-icon vk">VK</div>
              <div className="auth-icon tbank">T</div>
              <div className="auth-icon sber">S</div>
              <div className="auth-icon alfa">A</div>
            </div>

            <div className="desktop-form-grid">
              <TextField defaultValue="Иванова" placeholder="Фамилия" showTooltip={false} />
              <TextField defaultValue="Анна" placeholder="Имя" showTooltip={false} />
              <TextField defaultValue="Сергеевна" placeholder="Отчество" showTooltip={false} />
              <div />
              <TextField defaultValue="+7 999 123-45-67" placeholder="Номер телефона" showTooltip={false} />
              <TextField defaultValue="anna.ivanova@example.com" placeholder="Электронная почта" showTooltip={false} />
            </div>

            <div className="desktop-consent-list">
              <CheckboxRow label="Пришлите мне подтверждение на телефон" />
              <CheckboxRow label="Я даю согласие на получение специальных предложений и новостей" />
              <CheckboxRow checked label="Я даю согласие на обработку персональных данных" />
            </div>
          </div>

          <div className="checkout-card guest-form-card desktop-checkout-card">
            <h2>Введите данные гостей</h2>
            <div className="desktop-form-grid desktop-form-grid-guests">
              <TextField placeholder="Фамилия" showTooltip={false} />
              <TextField placeholder="Имя" showTooltip={false} />
              <TextField placeholder="Отчество" showTooltip={false} />
              <div />
              <TextField placeholder="Фамилия" showTooltip={false} />
              <TextField placeholder="Имя" showTooltip={false} />
              <TextField placeholder="Отчество" showTooltip={false} />
            </div>
          </div>

          <div className="checkout-card guest-form-card desktop-checkout-card">
            <h2>Дополнительно</h2>
            <div className="desktop-select-grid">
              <SelectLikeField label="Заезд" value="00:00" />
              <SelectLikeField label="Выезд" value="23:00" />
              <SelectLikeField label="Кровати" value="Не важно" />
            </div>
          </div>

          <div className="checkout-card guest-form-card desktop-checkout-card">
            <h2>Способ оплаты</h2>
            <div className="desktop-payment-copy">Сейчас вы не платите за бронирование! Правила отмены бронирования</div>
            <div className="desktop-payment-card">
              <div className="desktop-payment-title">Гарантия банковской картой. {rate.payment}</div>
              <div className="desktop-payment-description">Сейчас вы ничего не платите. Укажите данные карты для гарантии бронирования.</div>
            </div>
          </div>
        </div>

        <div className="desktop-checkout-side">
          <BookingSidebar room={room} rate={rate} onSubmit={onSubmit} showAction />
        </div>
      </div>
    </>
  );
}

function SuccessScreen({ onBack }) {
  return (
    <>
      <DesktopSectionHeader title="Бронирование успешно создано" />
      <div className="desktop-page-body">
        <div className="desktop-success-card">
          <SvgIcon className="success-icon" icon={validIcon} />
          <h2>Бронирование успешно создано</h2>
          <p>Это финальный экран сценария для UX-исследования.</p>
          <Button form="round" onClick={onBack} size="m" variant="primary">
            Вернуться к вариантам
          </Button>
        </div>
      </div>
    </>
  );
}

function BookingSidebar({ onSubmit, rate, room, showAction }) {
  return (
    <div className="desktop-booking-sidebar">
      <div className="desktop-booking-sidebar-title">Ваше бронирование</div>
      <div className="desktop-booking-sidebar-section desktop-booking-sidebar-dates">
        <div className="desktop-booking-sidebar-days">2 дня</div>
        <div className="desktop-booking-sidebar-range">24 декабря - 25 декабря</div>
        <div className="desktop-booking-sidebar-submeta">Четверг c 00:00</div>
        <div className="desktop-booking-sidebar-submeta">Пятница до 23:00</div>
      </div>
      <div className="desktop-booking-sidebar-section desktop-booking-sidebar-room">
        <div className="desktop-booking-sidebar-room-top">
          <span>Дом:</span>
          <strong>{formatPrice(rate.price)}</strong>
        </div>
        <div className="desktop-booking-sidebar-room-name">{room.name}</div>
      </div>
      <div className="desktop-booking-sidebar-section desktop-booking-sidebar-lines">
        <SummaryRow label="2 взрослых на основном месте" value="" />
        <SummaryRow label={rate.meal} value={rate.payment === 'Без предоплаты' ? 'Вкл.' : ''} />
        <SummaryRow label={rate.cancellation} value="" />
        <SummaryRow accent label="Итого" value={formatPrice(rate.price)} />
        <div className="desktop-booking-sidebar-taxes">{rate.taxes}</div>
      </div>

      {showAction ? (
        <div className="desktop-booking-sidebar-action">
          <div className="desktop-booking-sidebar-paynow">
            <span>К оплате сейчас</span>
            <strong>{rate.payment === 'Без предоплаты' ? '0 ₽' : formatPrice(rate.price)}</strong>
          </div>
          <Button form="round" onClick={onSubmit} size="m" variant="primary" width={buttonWidthEnum.full}>
            Забронировать
          </Button>
        </div>
      ) : null}
    </div>
  );
}

function FilterChip({ active, filter, onClear, onClick, open, value }) {
  const count = Array.isArray(value) ? value.length : 0;
  const label = filter.type === 'multi' && count > 0 ? `${filter.label}: ${count}` : filter.label;

  return (
    <div className="desktop-filter-chip-wrap">
      <Chip
        className={`desktop-filter-chip ${active ? 'desktop-filter-chip-active' : ''} ${open ? 'desktop-filter-chip-open' : ''}`}
        endIcon={
          active ? (
            <span
              aria-hidden="true"
              className="filter-chip-clear"
              onClick={(event) => {
                event.stopPropagation();
                onClear(filter.key);
              }}
            >
              <SvgIcon className="filter-chip-clear-icon" icon={crossIcon} />
            </span>
          ) : filter.type === 'multi' ? (
            <SvgIcon className={`filter-chip-arrow ${open ? 'filter-chip-arrow-open' : ''}`} icon={arrowDownIcon} />
          ) : null
        }
        label={label}
        onClick={() => onClick(filter)}
        selected={active || open}
      />
    </div>
  );
}

function FilterDropdown({ filter, onToggleOption, selectedValues }) {
  if (!filter || filter.type !== 'multi') {
    return null;
  }

  return (
    <div className="desktop-filter-dropdown">
      {filter.options.map((option) => {
        const checked = selectedValues.includes(option.value);

        return (
          <label className="filter-dropdown-option" key={option.value}>
            <input checked={checked} onChange={() => onToggleOption(filter.key, option.value)} type="checkbox" />
            <span className={`filter-dropdown-checkbox ${checked ? 'filter-dropdown-checkbox-checked' : ''}`}>{checked ? '✓' : ''}</span>
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

function EmptyState({ onReset }) {
  return (
    <div className="empty-state-card desktop-empty-state-card">
      <div className="empty-state-title">Нет вариантов с выбранными условиями</div>
      <div className="empty-state-text">Сбросьте фильтры, чтобы снова показать номера и тарифы.</div>
      <div className="desktop-empty-state-action">
        <Button form="round" onClick={onReset} size="m" variant="primary">
          Сбросить фильтры
        </Button>
      </div>
    </div>
  );
}

function SelectLikeField({ label, value }) {
  return (
    <button className="desktop-select-like" type="button">
      <span className="desktop-select-like-label">{label}</span>
      <span className="desktop-select-like-value">{value}</span>
      <span className="desktop-select-like-arrow">⌄</span>
    </button>
  );
}

function CheckboxRow({ checked, label }) {
  return (
    <label className="desktop-checkbox-row">
      <input defaultChecked={checked} type="checkbox" />
      <span className="desktop-checkbox-control" />
      <span>{label}</span>
    </label>
  );
}

function SummaryRow({ accent, label, value }) {
  return (
    <div className={`desktop-summary-row ${accent ? 'desktop-summary-row-accent' : ''}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function SvgIcon({ className, icon }) {
  return <img alt="" aria-hidden="true" className={className} src={icon} />;
}

function SvgInlineIcon({ className, icon }) {
  return <span aria-hidden="true" className={`${className} svg-inline-icon`} dangerouslySetInnerHTML={{ __html: icon }} />;
}

function scrollRates(node, offset) {
  if (!node) {
    return;
  }

  node.scrollBy({ left: offset, behavior: 'smooth' });
}

function getRouteFromHash() {
  const hash = window.location.hash || routes.list;
  if (hash === routes.checkout) {
    return 'checkout';
  }
  if (hash === routes.success) {
    return 'success';
  }
  return 'list';
}

function matchesRoomFilters(room, activeFilters) {
  if (activeFilters.balcony && !room.filterTags.balcony) {
    return false;
  }

  if (activeFilters.bedType.length > 0 && !activeFilters.bedType.some((value) => room.filterTags.bedType.includes(value))) {
    return false;
  }

  if (activeFilters.view.length > 0 && !activeFilters.view.some((value) => room.filterTags.view.includes(value))) {
    return false;
  }

  return true;
}

function matchesRateFilters(rate, activeFilters) {
  if (activeFilters.freeCancellation && rate.cancellation !== 'Бесплатная отмена') {
    return false;
  }

  if (activeFilters.noPrepayment && rate.payment !== 'Без предоплаты') {
    return false;
  }

  return true;
}

function isFilterActive(filter, activeFilters) {
  const value = activeFilters[filter.key];
  return Array.isArray(value) ? value.length > 0 : Boolean(value);
}

function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
}

function formatNumberWithDecimals(value) {
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
