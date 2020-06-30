<?php
/**
 *
 * User: sun.yaopeng
 * Date: 2020/6/30
 */
return [
    'sidebar' => [
        [
            'index' => '',
            'name' => '系统管理',
            'icon' => 'el-icon-setting',
            'disabled' => false,
            'children' => [
                [
                    'index' => 'users',
                    'name' => '用户管理',
                    'icon' => 'el-icon-s-custom',
                    'disabled' => false,
                    'children' => []
                ], [
                    'index' => 'roles',
                    'name' => '角色管理',
                    'icon' => 'el-icon-magic-stick',
                    'disabled' => false,
                    'children' => []
                ], [
                    'index' => 'permissions',
                    'name' => '权限管理',
                    'icon' => 'el-icon-view',
                    'disabled' => false,
                    'children' => []
                ]
            ]
        ], [
            'index' => 'posts',
            'name' => '文章管理',
            'icon' => 'el-icon-edit',
            'disabled' => false,
            'children' => []
        ], [
            'index' => 'topics',
            'name' => '专题管理',
            'icon' => 'el-icon-paperclip',
            'disabled' => false,
            'children' => []
        ], [
            'index' => 'notices',
            'name' => '通知管理',
            'icon' => 'el-icon-close-notification',
            'disabled' => false,
            'children' => []
        ]
    ]
];
