<?php

namespace Database\Seeders;

use Botble\Base\Supports\BaseSeeder;
use Botble\Blog\Models\Post;
use Botble\Language\Models\LanguageMeta;
use Botble\Menu\Models\Menu as MenuModel;
use Botble\Menu\Models\MenuLocation;
use Botble\Menu\Models\MenuNode;
use Botble\Page\Models\Page;
use Botble\RealEstate\Models\Property;
use Illuminate\Support\Arr;
use Menu;

class MenuSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'en_US' => [
                [
                    'name'     => 'Main menu',
                    'slug'     => 'main-menu',
                    'location' => 'main-menu',
                    'items'    => [
                        [
                            'title'    => 'Home',
                            'url'      => '/',
                            'children' => [
                                [
                                    'title' => 'Home layout 1',
                                    'url'   => '/',
                                ],
                                [
                                    'title'          => 'Home layout 2',
                                    'reference_id'   => 2,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Home layout 3',
                                    'reference_id'   => 3,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Home layout 4',
                                    'reference_id'   => 4,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Home layout 5',
                                    'reference_id'   => 5,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Home layout 6',
                                    'reference_id'   => 6,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Home layout 7',
                                    'reference_id'   => 7,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Home layout 8',
                                    'reference_id'   => 8,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Home layout 9',
                                    'reference_id'   => 9,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Map home layout',
                                    'reference_id'   => 10,
                                    'reference_type' => Page::class,
                                ],
                            ],
                        ],
                        [
                            'title'    => 'Listings',
                            'url'   => '/properties',
                            'children' => [
                                [
                                    'title'    => 'List Layout',
                                    'url'   => '/properties?layout=sidebar',
                                    'children' => [
                                        [
                                            'title' => 'With Sidebar',
                                            'url'   => '/properties?layout=sidebar',
                                        ],
                                        [
                                            'title' => 'With Map',
                                            'url'   => '/properties?layout=map',
                                        ],
                                        [
                                            'title' => 'Full width',
                                            'url'   => '/properties?layout=full',
                                        ],
                                    ],
                                ],
                                [
                                    'title'    => 'Grid Layout',
                                    'url'   => '/properties?layout=grid_sidebar',
                                    'children' => [
                                        [
                                            'title' => 'With Sidebar',
                                            'url'   => '/properties?layout=grid_sidebar',
                                        ],
                                        [
                                            'title' => 'With Map',
                                            'url'   => '/properties?layout=grid_map',
                                        ],
                                        [
                                            'title' => 'Full width',
                                            'url'   => '/properties?layout=grid_full',
                                        ],
                                    ],
                                ],
                                [
                                    'title' => 'Half Map Search',
                                    'url'   => '/properties?layout=half_map',
                                ],
                            ],
                        ],
                        [
                            'title'    => 'Features',
                            'url'      => '/',
                            'children' => [
                                [
                                    'title'    => 'Single Property',
                                    'url'      => '/',
                                    'children' => [
                                        [
                                            'title'          => 'Single Property 1',
                                            'reference_id'   => 1,
                                            'reference_type' => Property::class,
                                        ],
                                        [
                                            'title'          => 'Single Property 2',
                                            'reference_id'   => 2,
                                            'reference_type' => Property::class,
                                        ],
                                        [
                                            'title'          => 'Single Property 3',
                                            'reference_id'   => 3,
                                            'reference_type' => Property::class,
                                        ],
                                    ],
                                ],
                                [
                                    'title'    => 'Agents',
                                    'url'      => '/',
                                    'children' => [
                                        [
                                            'title'          => 'Agents List',
                                            'url'            => '/agents',
                                        ],
                                        [
                                            'title'          => 'Agents Detail Page',
                                            'url'            => '/agents/thesky9',
                                        ]
                                    ],
                                ],
                                [
                                    'title'    => 'My Account',
                                    'url'      => '/',
                                    'children' => [
                                        [
                                            'title'          => 'User Dashboard',
                                            'url'            => '/account/dashboard',
                                        ],
                                        [
                                            'title'          => 'Properties',
                                            'url'            => '/account/properties',
                                        ],
                                        [
                                            'title'          => 'My Profile',
                                            'url'            => '/account/settings',
                                        ],
                                        [
                                            'title'          => 'Packages',
                                            'url'            => '/account/packages',
                                        ],
                                        [
                                            'title'          => 'Change Password',
                                            'url'            => '/account/security',
                                        ],
                                    ],
                                ],
                                [
                                    'title'          => 'Submit Property',
                                    'url'            => '/account/properties/create',
                                ],
                            ],
                        ],
                        [
                            'title'    => 'Pages',
                            'url'      => '/',
                            'children' => [
                                [
                                    'title'          => 'Blogs Page',
                                    'reference_id'   => 12,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Blog Detail',
                                    'reference_id'   => 1,
                                    'reference_type' => Post::class,
                                ],
                                [
                                    'title'          => 'Pricing',
                                    'url'   => '/home#pricing-section',
                                ],
                                [
                                    'title'          => 'Error Page',
                                    'url'            => '/error-page',
                                    'reference_id'   => 39,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Contact',
                                    'reference_id'   => 14,
                                    'reference_type' => Page::class,
                                ],
                            ],

                        ],
                        [
                            'title' => 'Sign Up',
                            'url'   => '/register',
                        ],
                    ],
                ],
                [
                    'name'  => 'About',
                    'slug'  => 'about',
                    'items' => [
                        [
                            'title'          => 'About us',
                            'reference_id'   => 13,
                            'reference_type' => Page::class,
                        ],
                        [
                            'title'          => 'Contact us',
                            'reference_id'   => 14,
                            'reference_type' => Page::class,
                        ],
                        [
                            'title'          => 'Terms & Conditions',
                            'reference_id'   => 15,
                            'reference_type' => Page::class,
                        ],
                    ],
                ],
                [
                    'name'  => 'More information',
                    'slug'  => 'more-information',
                    'items' => [
                        [
                            'title' => 'All properties',
                            'url'   => '/properties',
                        ],
                        [
                            'title' => 'Houses for sale',
                            'url'   => '/properties?type=sale',
                        ],
                        [
                            'title' => 'Houses for rent',
                            'url'   => '/properties?type=rent',
                        ],
                    ],
                ],
                [
                    'name'  => 'News',
                    'slug'  => 'news',
                    'items' => [
                        [
                            'title'          => 'Latest news',
                            'url'            => '/news',
                        ],
                        [
                            'title'          => 'House architecture',
                            'url'            => '/house-architecture',
                        ],
                        [
                            'title'          => 'House design',
                            'url'            => '/house-design',
                        ],
                        [
                            'title'          => 'Building materials',
                            'url'            => '/building-materials',
                        ],
                    ],
                ],
            ],
            'vi'    => [
                [
                    'name'     => 'Menu ch??nh',
                    'slug'     => 'menu-chinh',
                    'location' => 'main-menu',
                    'items'    => [
                        [
                            'title'    => 'Trang ch???',
                            'reference_id'   => 1,
                            'reference_type' => Page::class,
                            'children' => [
                                [
                                    'title' => 'Trang ch??? 1',
                                    'reference_id'   => 1,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Trang ch??? 2',
                                    'reference_id'   => 2,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Trang ch??? 3',
                                    'reference_id'   => 3,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Trang ch??? 4',
                                    'reference_id'   => 4,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Trang ch??? 5',
                                    'reference_id'   => 5,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Trang ch??? 6',
                                    'reference_id'   => 6,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Trang ch??? 7',
                                    'reference_id'   => 7,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Trang ch??? 8',
                                    'reference_id'   => 8,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Trang ch??? 9',
                                    'reference_id'   => 9,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'Trang ch??? b???n ?????',
                                    'reference_id'   => 10,
                                    'reference_type' => Page::class,
                                ],
                            ],
                        ],
                        [
                            'title'    => 'Danh s??ch',
                            'url'   => '/properties?layout=sidebar',
                            'children' => [
                                [
                                    'title'    => 'D???ng list',
                                    'url'   => '/properties?layout=sidebar',
                                    'children' => [
                                        [
                                            'title' => 'C?? thanh b??n',
                                            'url'   => '/properties?layout=sidebar',
                                        ],
                                        [
                                            'title'        => 'Chi???u r???ng ?????y ?????',
                                            'url'          => '/properties?layout=full',
                                        ],
                                        [
                                            'title'        => 'C?? B???n ?????',
                                            'url'          => '/properties?layout=map',
                                        ],
                                    ],
                                ],
                                [
                                    'title'    => 'D???ng c???t',
                                    'url'   => '/properties?layout=grid_sidebar',
                                    'children' => [
                                        [
                                            'title' => 'C?? thanh b??n',
                                            'url'   => '/properties?layout=grid_sidebar',
                                        ],
                                        [
                                            'title' => 'C?? Map',
                                            'url'   => '/properties?layout=grid_map',
                                        ],
                                        [
                                            'title' => 'Chi???u r???ng ?????y ?????',
                                            'url'   => '/properties?layout=grid_full',
                                        ],
                                    ],
                                ],
                                [
                                    'title' => 'C?? 1/2 b???n ?????',
                                    'url'   => '/properties?layout=half_map',
                                ],
                            ],
                        ],
                        [
                            'title'    => 'T??nh n??ng',
                            'children' => [
                                [
                                    'title'    => 'Chi ti???t b???t ?????ng s???n',
                                    'reference_id'   => 21,
                                    'reference_type' => Property::class,
                                    'children' => [
                                        [
                                            'title'          => 'Chi ti???t b???t ?????ng s???n 1',
                                            'reference_id'   => 21,
                                            'reference_type' => Property::class,
                                        ],
                                        [
                                            'title'          => 'Chi ti???t b???t ?????ng s???n 2',
                                            'reference_id'   => 22,
                                            'reference_type' => Property::class,
                                        ],
                                        [
                                            'title'          => 'Chi ti???t b???t ?????ng s???n 3',
                                            'reference_id'   => 23,
                                            'reference_type' => Property::class,
                                        ],
                                    ],
                                ],
                                [
                                    'title'    => '?????i l?? v?? ng?????i ?????i l??',
                                    'url'      => '#',
                                    'children' => [
                                        [
                                            'title'          => 'Danh s??ch ?????i l??',
                                            'url'            => '/agents',
                                        ],
                                        [
                                            'title'          => 'Chi ti???t ?????a l??',
                                            'url'            => '/agents/thesky9',
                                        ]
                                    ],
                                ],
                                [
                                    'title'    => 'T??i kho???n',
                                    'url'      => '#',
                                    'children' => [
                                        [
                                            'title'          => 'My Dashboard',
                                            'url'            => '/account/dashboard',
                                        ],
                                        [
                                            'title'          => 'Properties',
                                            'url'            => '/account/properties',
                                        ],
                                        [
                                            'title'          => 'My Profile',
                                            'url'            => '/account/settings',
                                        ],
                                        [
                                            'title'          => 'Packages',
                                            'url'            => '/account/packages',
                                        ],
                                        [
                                            'title'          => '?????i m???t kh???u',
                                            'url'            => '/account/security',
                                        ],
                                    ]
                                ],
                                [
                                    'title'          => '????ng b???t ?????ng s???n',
                                    'url'            => '/account/properties/create',
                                ],
                            ],
                        ],
                        [
                            'title'    => 'Trang',
                            'url'      => '/',
                            'children' => [
                                [
                                    'title'          => 'Trang blog',
                                    'reference_id'   => 28,
                                    'reference_type' => Page::class,
                                ],
                                [
                                    'title'          => 'B??i vi???t chi ti???t',
                                    'reference_id'   => 20,
                                    'reference_type' => Post::class,
                                ],
                                [
                                    'title'          => 'B???ng gi??',
                                    'url'            => '/home#pricing-section',
                                ],
                                [
                                    'title'          => 'Page l???i',
                                    'url'            => '/error-page',
                                ],
                                [
                                    'title'          => 'Li??n h???',
                                    'reference_id'   => 30,
                                    'reference_type' => Page::class,
                                ],
                            ],

                        ],
                        [
                            'title' => '????ng k??',
                            'url'   => '/register',
                        ],
                    ],
                ],
                [
                    'name'  => 'V??? ch??ng t??i',
                    'slug'  => 've-chung-toi',
                    'items' => [
                        [
                            'title'          => 'V??? ch??ng t??i',
                            'reference_id'   => 9,
                            'reference_type' => Page::class,
                        ],
                        [
                            'title'          => 'Li??n h???',
                            'reference_id'   => 10,
                            'reference_type' => Page::class,
                        ],
                        [
                            'title'          => '??i???u kho???n v?? quy ?????nh',
                            'reference_id'   => 11,
                            'reference_type' => Page::class,
                        ],
                    ],
                ],
                [
                    'name'  => 'Th??ng tin th??m',
                    'slug'  => 'thong-tin-them',
                    'items' => [
                        [
                            'title' => 'Nh?? - C??n h???',
                            'url'   => '/properties',
                        ],
                        [
                            'title' => 'Nh?? b??n',
                            'url'   => '/properties?type=sale',
                        ],
                        [
                            'title' => 'Nh?? cho thu??',
                            'url'   => '/properties?type=rent',
                        ],
                    ],
                ],
                [
                    'name'  => 'Tin t???c',
                    'slug'  => 'tin-tuc',
                    'items' => [
                        [
                            'title'          => 'Tin t???c m???i nh???t',
                            'reference_id'   => 2,
                            'reference_type' => Page::class,
                        ],
                        [
                            'title'          => 'Ki???n tr??c nh??',
                            'url'            => '/kien-truc-nha',
                        ],
                        [
                            'title'          => 'Thi???t k??? nh??',
                            'url'            => '/thiet-ke-nha',
                        ],
                        [
                            'title'          => 'V???t li???u x??y d???ng',
                            'url'            => '/vat-lieu-xay-dung',
                        ],
                    ],
                ],
            ],
        ];

        MenuModel::truncate();
        MenuLocation::truncate();
        MenuNode::truncate();
        LanguageMeta::where('reference_type', MenuModel::class)->delete();
        LanguageMeta::where('reference_type', MenuLocation::class)->delete();

        foreach ($data as $locale => $menus) {
            foreach ($menus as $index => $item) {
                $menu = MenuModel::create(Arr::except($item, ['items', 'location']));

                if (isset($item['location'])) {
                    $menuLocation = MenuLocation::create([
                        'menu_id'  => $menu->id,
                        'location' => $item['location'],
                    ]);

                    $originValue = LanguageMeta::where([
                        'reference_id'   => $locale == 'en_US' ? 1 : 2,
                        'reference_type' => MenuLocation::class,
                    ])->value('lang_meta_origin');

                    LanguageMeta::saveMetaData($menuLocation, $locale, $originValue);
                }

                foreach ($item['items'] as $menuNode) {
                    $this->createMenuNode($index, $menuNode, $locale, $menu->id);
                }

                $originValue = null;

                if ($locale !== 'en_US') {
                    $originValue = LanguageMeta::where([
                        'reference_id'   => $index + 1,
                        'reference_type' => MenuModel::class,
                    ])->value('lang_meta_origin');
                }

                LanguageMeta::saveMetaData($menu, $locale, $originValue);
            }
        }

        Menu::clearCacheMenuItems();
    }

    /**
     * @param int $index
     * @param array $menuNode
     * @param string $locale
     * @param int $menuId
     * @param int $parentId
     */
    protected function createMenuNode(int $index, array $menuNode, string $locale, int $menuId, int $parentId = 0): void
    {
        $menuNode['menu_id'] = $menuId;
        $menuNode['parent_id'] = $parentId;

        if (Arr::has($menuNode, 'children')) {
            $children = $menuNode['children'];
            $menuNode['has_child'] = true;

            unset($menuNode['children']);
        } else {
            $children = [];
            $menuNode['has_child'] = false;
        }

        $createdNode = MenuNode::create($menuNode);

        if ($children) {
            foreach ($children as $child) {
                $this->createMenuNode($index, $child, $locale, $menuId, $createdNode->id);
            }
        }
    }
}
