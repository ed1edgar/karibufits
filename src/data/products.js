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
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'shoes-2',
        name: 'Strappy Heels',
        category: 'shoes',
        price: 130.00,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'shoes-3',
        name: 'Leather Loafers',
        category: 'shoes',
        price: 160.00,
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'watch-1',
        name: 'Classic Silver Watch',
        category: 'watches',
        price: 250.00,
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'watch-2',
        name: 'Rose Gold Minimalist',
        category: 'watches',
        price: 220.00,
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'watch-3',
        name: 'Chronograph Leather',
        category: 'watches',
        price: 295.00,
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'hat-1',
        name: 'Wool Beanie',
        category: 'hats',
        price: 35.00,
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'hat-2',
        name: 'Wide Brim Fedora',
        category: 'hats',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c34?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'hat-3',
        name: 'Canvas Cap',
        category: 'hats',
        price: 30.00,
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop'
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
