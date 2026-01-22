export const products = [
    {
        id: 'w1',
        name: 'Classic Denim Jacket',
        category: 'women',
        price: 89.00,
        image: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=800&auto=format&fit=crop',
        description: 'A timeless classic. This denim jacket features a relaxed fit, distressed details, and our signature premium hardware.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Blue', 'Black'],
        relatedAccessories: ['shoes-1', 'watch-1', 'hat-1']
    },
    {
        id: 'w2',
        name: 'Silk Midi Dress',
        category: 'women',
        price: 145.00,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
        description: 'Elegant silk midi dress perfect for evening soirées.',
        sizes: ['S', 'M', 'L'],
        colors: ['Emerald', 'Black', 'Champagne'],
        relatedAccessories: ['shoes-2', 'watch-2', 'hat-2']
    },
    {
        id: 'm1',
        name: 'Oxford Cotton Shirt',
        category: 'men',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
        description: 'Crisp, breathable cotton oxford shirt. A wardrobe staple.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['White', 'Light Blue', 'Pink'],
        relatedAccessories: ['shoes-3', 'watch-3', 'hat-3']
    },
    {
        id: 'm2',
        name: 'Slim Fit Chinos',
        category: 'men',
        price: 78.00,
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=800&auto=format&fit=crop',
        description: 'Versatile chinos with a modern slim cut.',
        sizes: ['30', '32', '34', '36'],
        colors: ['Khaki', 'Navy', 'Olive'],
        relatedAccessories: ['shoes-4', 'watch-3', 'hat-3']
    },
    {
        id: 't1',
        name: 'Graphic Hoodie',
        category: 'teens',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
        description: 'Heavyweight cotton blend hoodie with minimalist graphic.',
        sizes: ['S', 'M', 'L'],
        colors: ['Grey', 'Black'],
        relatedAccessories: ['shoes-1', 'hat-1']
    }
];

export const accessories = [
    {
        id: 'shoes-1',
        name: 'Minimalist White Sneakers',
        category: 'shoes',
        price: 110.00,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
        description: 'Clean and minimalist white sneakers perfect for any casual outfit. Made with premium leather and comfortable cushioning.',
        sizes: ['7', '8', '9', '10', '11', '12'],
        colors: ['White'],
        relatedAccessories: ['hat-1', 'watch-1']
    },
    {
        id: 'shoes-2',
        name: 'Strappy Heels',
        category: 'shoes',
        price: 130.00,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
        description: 'Elegant strappy heels that elevate any evening look. Crafted with premium materials for comfort and style.',
        sizes: ['6', '7', '8', '9', '10'],
        colors: ['Black', 'Nude'],
        relatedAccessories: ['watch-2', 'hat-2']
    },
    {
        id: 'shoes-3',
        name: 'Leather Loafers',
        category: 'shoes',
        price: 160.00,
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=800&auto=format&fit=crop',
        description: 'Classic leather loafers that blend sophistication with comfort. Perfect for both professional and casual settings.',
        sizes: ['7', '8', '9', '10', '11', '12'],
        colors: ['Brown', 'Black'],
        relatedAccessories: ['watch-3', 'hat-3']
    },
    {
        id: 'watch-1',
        name: 'Classic Silver Watch',
        category: 'watches',
        price: 250.00,
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
        description: 'Timeless silver watch with a minimalist design. Swiss movement and water-resistant construction.',
        sizes: ['One Size'],
        colors: ['Silver'],
        relatedAccessories: ['shoes-1', 'hat-1']
    },
    {
        id: 'watch-2',
        name: 'Rose Gold Minimalist',
        category: 'watches',
        price: 220.00,
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
        description: 'Elegant rose gold watch with a clean, minimalist face. Perfect for adding a touch of luxury to any outfit.',
        sizes: ['One Size'],
        colors: ['Rose Gold'],
        relatedAccessories: ['shoes-2', 'hat-2']
    },
    {
        id: 'watch-3',
        name: 'Chronograph Leather',
        category: 'watches',
        price: 295.00,
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
        description: 'Sophisticated chronograph watch with genuine leather strap. Features multiple time zones and date function.',
        sizes: ['One Size'],
        colors: ['Brown Leather'],
        relatedAccessories: ['shoes-3', 'hat-3']
    },
    {
        id: 'hat-1',
        name: 'Wool Beanie',
        category: 'hats',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop',
        description: 'Cozy wool beanie perfect for cold weather. Soft, warm, and stylish for everyday wear.',
        sizes: ['One Size'],
        colors: ['Black', 'Grey', 'Navy'],
        relatedAccessories: ['shoes-1', 'watch-1']
    },
    {
        id: 'hat-2',
        name: 'Wide Brim Fedora',
        category: 'hats',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c34?q=80&w=800&auto=format&fit=crop',
        description: 'Stylish wide brim fedora that adds sophistication to any outfit. Perfect for both casual and dressy occasions.',
        sizes: ['S/M', 'L/XL'],
        colors: ['Black', 'Tan', 'Navy'],
        relatedAccessories: ['shoes-2', 'watch-2']
    },
    {
        id: 'hat-3',
        name: 'Canvas Cap',
        category: 'hats',
        price: 30.00,
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
        description: 'Classic canvas cap with adjustable strap. Perfect for sunny days and casual outings.',
        sizes: ['One Size'],
        colors: ['Black', 'Navy', 'Olive', 'White'],
        relatedAccessories: ['shoes-3', 'watch-3']
    }
];

export const getAllProducts = () => [...products, ...accessories];
export const getProductsByCategory = (category) => {
    if (category === 'accessories') {
        return accessories;
    }
    return products.filter(p => p.category === category);
};
export const getProductById = (id) => getAllProducts().find(p => p.id === id);
export const getAccessoriesByIds = (ids) => accessories.filter(a => ids.includes(a.id));