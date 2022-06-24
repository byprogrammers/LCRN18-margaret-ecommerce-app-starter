import { COLORS } from "../constants";

const banners = [
    {
        id: 1,
        title: 'Same Price of $100',
        description: 'Shoe in Miniacs Shop',
        date: 'Dec 24',
        image: require('../assets/images/banner-01.png'),
    },
    {
        id: 2,
        title: 'FlASH SALE Haloween',
        description: 'Stay tune and check your notif everyday',
        date: '6 hours',
        image: require('../assets/images/banner-02.png'),
    }
]

const flashDeals = [
    {
        id: 1,
        title: "Flash Deals",
        desc: "Sale time from 1:00pm - 3:00pm"
    },
    {
        id: 2,
        image: require('../assets/images/dummy/product_01.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 3,
        image: require('../assets/images/dummy/product_02.png'),
        sold_qty: "546",
        total_qty: "5k",
        percentage: "11%"
    }
]

const promoItems = [
    {
        id: 1,
        title: "Promo Product",
        desc: "Products are priced from 40%"
    },
    {
        id: 2,
        image: require('../assets/images/dummy/product_03.png'),
        name: "Wireless Controller PS4™",
        price: 278.00,
        discount: "-54%"
    },
    {
        id: 3,
        image: require('../assets/images/dummy/product_04.png'),
        name: "T-shirt Men Uniquilo",
        price: 378.00,
        discount: "-60%"
    }
]

const categories = [
    {
        id: 1,
        name: "Bed",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/bed_01.png'),
        image_2: require('../assets/images/dummy/bed_02.png'),
        image_3: require('../assets/images/dummy/bed_03.png'),
        bg_color: COLORS.primary20
    },
    {
        id: 2,
        name: "Bathtub",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/bathtub_01.png'),
        image_2: require('../assets/images/dummy/bathtub_02.png'),
        image_3: require('../assets/images/dummy/bathtub_03.png'),
        bg_color: COLORS.error20
    },
    {
        id: 2,
        name: "Chair",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/chair_01.png'),
        image_2: require('../assets/images/dummy/chair_02.png'),
        image_3: require('../assets/images/dummy/chair_03.png'),
        bg_color: COLORS.success20
    },
    {
        id: 3,
        name: "Wardrobe",
        qty: "1.2k",
        image_1: require('../assets/images/dummy/wardrobe_01.png'),
        image_2: require('../assets/images/dummy/wardrobe_02.png'),
        image_3: require('../assets/images/dummy/wardrobe_03.png'),
        bg_color: COLORS.secondary20
    }
]

const quickALinks = [
    {
        id: 1,
        title: 'Event',
        icon: require('../assets/icons/book.png'),
        color: '#FFFFFF',
    },
    {
        id: 2,
        title: 'Transport',
        icon: require('../assets/icons/car.png'),
        color: '#6DA2FD',
    },
    {
        id: 3,
        title: 'Live',
        icon: require('../assets/icons/video.png'),
        color: '#F9A1D8',
    },
    {
        id: 4,
        title: 'Coin',
        icon: require('../assets/icons/shopping_bag.png'),
        color: '#00D2DF',
    },
    {
        id: 5,
        title: 'Flash Sale',
        icon: require('../assets/icons/clock.png'),
        color: '#F7565D',
    },
    {
        id: 6,
        title: 'Search',
        icon: require('../assets/icons/search.png'),
        color: '#FDD452',
    },
    {
        id: 7,
        title: 'Premium',
        icon: require('../assets/icons/fire.png'),
        color: '#FF841E',
    },
    {
        id: 8,
        title: 'Card',
        icon: require('../assets/icons/credit_card.png'),
        color: '#7B60EA',
    }

]

const services = [
    {
        id: 1,
        title: 'Fast shopping',
        description: 'Fast home delivery within 2h free shipping',
        price: 'Only 50$/Month',
        image: require('../assets/images/get_card.png')
    },
    {
        id: 2,
        title: 'Fresh food',
        description: 'You just need the menu we will suggest, choose buy for you',
        price: 'Only 20$/Month',
        image: require('../assets/images/buy_coffee.png')
    },
    {
        id: 3,
        title: 'Exchange old things',
        description: 'You can exchange used items',
        price: 'Only 10$/Month',
        image: require('../assets/images/get_money.png')
    },
    {
        id: 4,
        title: 'Give gifts friend',
        description: 'Help you to send gifts to your loved ones',
        price: 'Only 5$/Month',
        image: require('../assets/images/get_reward.png')
    }
]

const chartData = [
    {
        x: 'Mon',
        y: 62136.52
    },
    {
        x: 'Tue',
        y: 42410.65
    },
    {
        x: 'Wed',
        y: 50794.10
    },
    {
        x: 'Thur',
        y: 75452.00
    },
    {
        x: 'Fri',
        y: 62136.60
    },
    {
        x: 'Sat',
        y: 42410.00
    },
    {
        x: 'Sun',
        y: 26136.50
    }
]

const orders = [
    {
        id: 1,
        order_no: 678765,
        date: '11:20AM   2018-03-12',
        total: '$570.00'
    },
    {
        id: 2,
        order_no: 678765,
        date: '11:20AM   2018-03-12',
        total: '$208.00'
    },
    {
        id: 3,
        order_no: 678765,
        date: '11:20AM   2018-03-12',
        total: '$600.00'
    }
]

const flashSales = [
    {
        id: 1,
        time: "08:00",
        status: "Done Flash"
    },
    {
        id: 2,
        time: "12:00",
        status: "Ongoing"
    },
    {
        id: 3,
        time: "16:00",
        status: "Next Flash"
    },
    {
        id: 4,
        time: "20:00",
        status: "Next Flash"
    }
]

const brands = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Nikon",
        logo: require('../assets/images/dummy/logo_01.png')
    },
    {
        id: 3,
        name: "Sony",
        logo: require('../assets/images/dummy/logo_02.png')
    },
    {
        id: 4,
        name: "Fujifilm",
        logo: require('../assets/images/dummy/logo_03.png')
    }
]

const flashSaleItems = [
    {
        id: 1,
        name: 'Fujifilm Instax Mini 9',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_01.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 2,
        name: 'Nikon Coolpix B500',
        price: '$67.00',
        discount: '-64%',
        image: require('../assets/images/dummy/camera_02.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 3,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 4,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 5,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 6,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 7,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    },
    {
        id: 8,
        name: 'Camera Nikon D5000',
        price: '$367.00',
        discount: '-24%',
        image: require('../assets/images/dummy/camera_03.png'),
        sold_qty: "4k",
        total_qty: "5k",
        percentage: "80%"
    }
]

const featuredProducts = [
    {
        id: 1,
        title: "Up To 50% Off\nHoliday Bit",
        image: require('../assets/images/dummy/featured_01.png')
    }
]

const topSearch = [
    {
        id: 1,
        keyword: "Man",
        result: "35k",
        image: require('../assets/images/dummy/top_01.png')
    },
    {
        id: 2,
        keyword: "Women",
        result: "35k",
        image: require('../assets/images/dummy/top_02.png')
    },
    {
        id: 3,
        keyword: "Jeans",
        result: "45k",
        image: require('../assets/images/dummy/top_03.png')
    }
]

const suggestedSearch = [
    {
        id: 1,
        keyword: "T-Shirt"
    },
    {
        id: 2,
        keyword: "Baggy"
    },
    {
        id: 3,
        keyword: "Kids"
    },
    {
        id: 4,
        keyword: "Ot"
    },
    {
        id: 5,
        keyword: "Jacket"
    },
    {
        id: 6,
        keyword: "Dress"
    },
    {
        id: 7,
        keyword: "Dress"
    }
]

const recentSearch = [
    {
        id: 1,
        keyword: "Summer dress"
    },
    {
        id: 2,
        keyword: "Summer beach wear"
    },
    {
        id: 3,
        keyword: "Children's hats"
    },
    {
        id: 4,
        keyword: "Doice & Babana"
    }
]

export default {
    banners,
    flashDeals,
    promoItems,
    categories,
    quickALinks,
    services,
    chartData,
    orders,
    flashSales,
    brands,
    flashSaleItems,
    featuredProducts,
    topSearch,
    suggestedSearch,
    recentSearch
}