
const default_state = [
    { 
        id: 1,
        name: 'Giày Lining AYTR011-2',
        avatar: './images/lining-1.png',
        price: '1190000',
        description: 'Mẫu Giày cầu lông Lining AYTR014-2 chính hãng đấy nhé!',
        available: true
    },
    { 
        id: 2,
        name: 'Vợt cầu lông Yonex Astrox 88D Tour',
        avatar: './images/yonex-88d-tour.png',
        price: '2319000',
        description: 'Vợt cầu lông Yonex Astrox 88D Tour chính hãng là sự lựa chọn cực hoàn hảo dành cho bạn đấy nhé!',
        available: true
    },
    { 
        id: 3,
        name: 'Vợt cầu lông Yonex Astrox 88D Game',
        avatar: './images/yonex-88d-game.png',
        price: '1889000',
        description: 'Vợt cầu lông Yonex Astrox 88D Game chính hãng chắc chắn là sự lựa chọn cực hoàn hảo đấy nhé!',
        available: true
    },
    { 
        id: 4,
        name: 'Combo vợt cầu lông Victor',
        avatar: './images/combo-victor.png',
        price: '4480000',
        description: 'Mua 1 được 3 chọn ngay Combo mua vợt cầu lông Victor ARS 90K tặng vợt Victor ARS 9990K + vợt Victor DX 9999X với mức giá cực kì ưu đãi đấy nhé!',
        available: false
    },
]

const productList = (state = default_state, action) => {
    return state
}

export default productList