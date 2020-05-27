<aside class="main-sidebar">
    <section class="sidebar">
        <ul class="sidebar-menu">
            @can('system')
            <li class="treeview active">
                <a href="#">
                    <i class="fa fa-dashboard"></i> <span>系统管理</span>
                    <span class="pull-right-container"></span>
                </a>
                <ul class="treeview-menu">
                    <li><a href="{{ route('admin.users.index') }}"><i class="fa fa-circle-o"></i> 用户管理</a></li>
                    <li><a href="{{ route('admin.roles.index') }}"><i class="fa fa-circle-o"></i> 角色管理</a></li>
                    <li><a href="{{ route('admin.permissions.index') }}"><i class="fa fa-circle-o"></i> 权限管理</a></li>
                </ul>
            </li>
            @endcan
            @can('post')
            <li class="active treeview">
                <a href="{{ route('admin.posts.index') }}">
                    <i class="fa fa-dashboard"></i> <span>文章管理</span>
                </a>
            </li>
            @endcan
            @can('topic')
            <li class="active treeview">
                <a href="{{ route('admin.topics.index') }}">
                    <i class="fa fa-dashboard"></i> <span>专题管理</span>
                </a>
            </li>
            @endcan
            @can('notice')
            <li class="active treeview">
                <a href="{{ route('admin.notices.index') }}">
                    <i class="fa fa-dashboard"></i> <span>通知管理</span>
                </a>
            </li>
            @endcan
        </ul>
    </section>
</aside>
