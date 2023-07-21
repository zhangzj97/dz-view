-- ------------------------------------------
-- --- auth_user                        -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_user;

CREATE TABLE IF NOT EXISTS auth_user (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    delete_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Delete]删除者 UserId',
    delete_time DATETIME NOT NULL COMMENT '[Delete]删除时间',
    delete_flag CHAR(7) NOT NULL DEFAULT "" COMMENT '[Delete]删除标记',
    uuid VARCHAR(255) NOT NULL DEFAULT "" COMMENT '唯一标识',
    username VARCHAR(255) NOT NULL DEFAULT "" COMMENT '用户名',
    password VARCHAR(255) NOT NULL DEFAULT "" COMMENT '密码',
    salt CHAR(7) NOT NULL DEFAULT "" COMMENT '密码盐',
    last_login_ip VARCHAR(255) NOT NULL DEFAULT "" COMMENT '最近登录IP',
    last_login_time DATETIME NOT NULL COMMENT '最近登录时间',
    last_change_pwd_time DATETIME NOT NULL COMMENT '最近修改密码时间',
    PRIMARY KEY (id)
) COMMENT '[User]Data';

-- ------------------------------------------
-- --- auth_user_profile                -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_user_profile;

CREATE TABLE IF NOT EXISTS auth_user_profile (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    nickname VARCHAR(255) NOT NULL DEFAULT "" COMMENT '昵称',
    bio VARCHAR(255) NOT NULL DEFAULT "" COMMENT '个人简介',
    avatar VARCHAR(255) NOT NULL DEFAULT "" COMMENT '头像',
    realname VARCHAR(255) NOT NULL DEFAULT "" COMMENT '真实名称',
    PRIMARY KEY (id)
) COMMENT '[User]ProfileVObj';

-- ------------------------------------------
-- --- auth_user_extend                 -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_user_extend;

CREATE TABLE IF NOT EXISTS auth_user_extend (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    PRIMARY KEY (id)
) COMMENT '[User]ExtendVObj';

-- ------------------------------------------
-- --- auth_user_security               -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_user_security;

CREATE TABLE IF NOT EXISTS auth_user_security (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    security_type CHAR(7) NOT NULL DEFAULT "" COMMENT '认证类型',
    public_key VARCHAR(255) NOT NULL DEFAULT "" COMMENT '公钥',
    private_key VARCHAR(255) NOT NULL DEFAULT "" COMMENT '私钥',
    expire_time DATETIME NOT NULL COMMENT '有效时间',
    salt CHAR(7) NOT NULL DEFAULT "" COMMENT '盐',
    PRIMARY KEY (id)
) COMMENT '[User]SecurityVObj';

-- ------------------------------------------
-- --- auth_user_security_type_username -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_user_security_type_username;

CREATE TABLE IF NOT EXISTS auth_user_security_type_username (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    security_type CHAR(7) NOT NULL DEFAULT "" COMMENT '认证类型',
    public_key VARCHAR(255) NOT NULL DEFAULT "" COMMENT '公钥',
    private_key VARCHAR(255) NOT NULL DEFAULT "" COMMENT '私钥',
    expire_time DATETIME NOT NULL COMMENT '有效时间',
    salt CHAR(7) NOT NULL DEFAULT "" COMMENT '盐',
    PRIMARY KEY (id)
) COMMENT '[User]SecurityVObj type=username';

-- ------------------------------------------
-- --- auth_user_security_type_mobile   -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_user_security_type_mobile;

CREATE TABLE IF NOT EXISTS auth_user_security_type_mobile (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    security_type CHAR(7) NOT NULL DEFAULT "" COMMENT '认证类型',
    public_key VARCHAR(255) NOT NULL DEFAULT "" COMMENT '公钥',
    private_key VARCHAR(255) NOT NULL DEFAULT "" COMMENT '私钥',
    expire_time DATETIME NOT NULL COMMENT '有效时间',
    salt CHAR(7) NOT NULL DEFAULT "" COMMENT '盐',
    PRIMARY KEY (id)
) COMMENT '[User]SecurityVObj type=mobile';

-- ------------------------------------------
-- --- auth_user_security_log           -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_user_security_log;

CREATE TABLE IF NOT EXISTS auth_user_security_log (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    user_security_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'UserSecurityId',
    oper_type CHAR(7) NOT NULL DEFAULT "" COMMENT '操作类型',
    oper_ip VARCHAR(255) NOT NULL DEFAULT "" COMMENT '操作IP',
    oper_area CHAR(7) NOT NULL DEFAULT "" COMMENT '操作地区',
    oper_time DATETIME NOT NULL COMMENT '操作时间',
    oper_result_code CHAR(7) NOT NULL DEFAULT "" COMMENT '操作结果Code',
    PRIMARY KEY (id)
) COMMENT '[User]SecurityLog';

-- ------------------------------------------
-- --- auth_tenant                      -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_tenant;

CREATE TABLE IF NOT EXISTS auth_tenant (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    delete_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Delete]删除者 UserId',
    delete_time DATETIME NOT NULL COMMENT '[Delete]删除时间',
    delete_flag CHAR(7) NOT NULL DEFAULT "" COMMENT '[Delete]删除标记',
    name VARCHAR(255) NOT NULL DEFAULT "" COMMENT '租户名称',
    code VARCHAR(255) NOT NULL DEFAULT "" COMMENT '租户Code',
    address VARCHAR(255) NOT NULL DEFAULT "" COMMENT '租户地址',
    mobile VARCHAR(255) NOT NULL DEFAULT "" COMMENT '联系电话',
    email VARCHAR(255) NOT NULL DEFAULT "" COMMENT '邮箱',
    wechat VARCHAR(255) NOT NULL DEFAULT "" COMMENT '微信',
    PRIMARY KEY (id)
) COMMENT '[Tenant]Data';

-- ------------------------------------------
-- --- auth_tenant_extend               -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_tenant_extend;

CREATE TABLE IF NOT EXISTS auth_tenant_extend (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    tenant_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '租户Id',
    PRIMARY KEY (id)
) COMMENT '[Tenant]ExtendVObj';

-- ------------------------------------------
-- --- auth_dept                        -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_dept;

CREATE TABLE IF NOT EXISTS auth_dept (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    delete_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Delete]删除者 UserId',
    delete_time DATETIME NOT NULL COMMENT '[Delete]删除时间',
    delete_flag CHAR(7) NOT NULL DEFAULT "" COMMENT '[Delete]删除标记',
    tree_pid BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Tree]上级 Id',
    tree_level CHAR(7) NOT NULL DEFAULT "" COMMENT '[Tree]层级',
    tree_ancestor VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Tree]祖先 IdPath',
    name VARCHAR(255) NOT NULL DEFAULT "" COMMENT '部门名称',
    code VARCHAR(255) NOT NULL DEFAULT "" COMMENT '部门Code',
    contact_mobile VARCHAR(255) NOT NULL DEFAULT "" COMMENT '联系人电话',
    contact_realname VARCHAR(255) NOT NULL DEFAULT "" COMMENT '联系人姓名',
    PRIMARY KEY (id)
) COMMENT '[Dept]Data';

-- ------------------------------------------
-- --- auth_dept_extend                 -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_dept_extend;

CREATE TABLE IF NOT EXISTS auth_dept_extend (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    dept_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '部门Id',
    PRIMARY KEY (id)
) COMMENT '[Dept]ExtendVObj';

-- ------------------------------------------
-- --- auth_post                        -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_post;

CREATE TABLE IF NOT EXISTS auth_post (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    delete_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Delete]删除者 UserId',
    delete_time DATETIME NOT NULL COMMENT '[Delete]删除时间',
    delete_flag CHAR(7) NOT NULL DEFAULT "" COMMENT '[Delete]删除标记',
    name VARCHAR(255) NOT NULL DEFAULT "" COMMENT '岗位名称',
    code VARCHAR(255) NOT NULL DEFAULT "" COMMENT '岗位Code',
    PRIMARY KEY (id)
) COMMENT '[Post]Data';

-- ------------------------------------------
-- --- auth_post_extend                 -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_post_extend;

CREATE TABLE IF NOT EXISTS auth_post_extend (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    post_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '岗位Id',
    PRIMARY KEY (id)
) COMMENT '[Post]ExtendVObj';

-- ------------------------------------------
-- --- auth_role                        -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_role;

CREATE TABLE IF NOT EXISTS auth_role (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    delete_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Delete]删除者 UserId',
    delete_time DATETIME NOT NULL COMMENT '[Delete]删除时间',
    delete_flag CHAR(7) NOT NULL DEFAULT "" COMMENT '[Delete]删除标记',
    name VARCHAR(255) NOT NULL DEFAULT "" COMMENT '角色名称',
    code VARCHAR(255) NOT NULL DEFAULT "" COMMENT '角色Code',
    PRIMARY KEY (id)
) COMMENT '[Role]Data';

-- ------------------------------------------
-- --- auth_role_extend                 -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_role_extend;

CREATE TABLE IF NOT EXISTS auth_role_extend (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    role_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '角色Id',
    PRIMARY KEY (id)
) COMMENT '[Role]ExtendVObj';

-- ------------------------------------------
-- --- auth_resource                    -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_resource;

CREATE TABLE IF NOT EXISTS auth_resource (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    delete_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Delete]删除者 UserId',
    delete_time DATETIME NOT NULL COMMENT '[Delete]删除时间',
    delete_flag CHAR(7) NOT NULL DEFAULT "" COMMENT '[Delete]删除标记',
    tree_pid BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Tree]上级 Id',
    tree_level CHAR(7) NOT NULL DEFAULT "" COMMENT '[Tree]层级',
    tree_ancestor VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Tree]祖先 IdPath',
    name VARCHAR(255) NOT NULL DEFAULT "" COMMENT '资源名称',
    code VARCHAR(255) NOT NULL DEFAULT "" COMMENT '资源Code',
    resource_type CHAR(7) NOT NULL DEFAULT "" COMMENT '资源类型',
    PRIMARY KEY (id)
) COMMENT '[Resource]Data';

-- ------------------------------------------
-- ---                                  -----
-- ------------------------------------------
DROP TABLE IF EXISTS;

CREATE TABLE IF NOT EXISTS (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    delete_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Delete]删除者 UserId',
    delete_time DATETIME NOT NULL COMMENT '[Delete]删除时间',
    delete_flag CHAR(7) NOT NULL DEFAULT "" COMMENT '[Delete]删除标记',
    tree_pid BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Tree]上级 Id',
    tree_level CHAR(7) NOT NULL DEFAULT "" COMMENT '[Tree]层级',
    tree_ancestor VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Tree]祖先 IdPath',
    name VARCHAR(255) NOT NULL DEFAULT "" COMMENT '资源名称',
    code VARCHAR(255) NOT NULL DEFAULT "" COMMENT '资源Code',
    resource_type CHAR(7) NOT NULL DEFAULT "" COMMENT '资源类型',
    PRIMARY KEY (id)
) COMMENT '';

-- ------------------------------------------
-- --- auth_resource_menu               -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_resource_menu;

CREATE TABLE IF NOT EXISTS auth_resource_menu (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    resource_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '资源Id',
    path VARCHAR(255) NOT NULL DEFAULT "" COMMENT '路由',
    component VARCHAR(255) NOT NULL DEFAULT "" COMMENT '路由组件',
    is_fixed_tag CHAR(7) NOT NULL DEFAULT "" COMMENT '是否默认固定标签',
    is_show_menu CHAR(7) NOT NULL DEFAULT "" COMMENT '是否作为菜单显示',
    title VARCHAR(255) NOT NULL DEFAULT "" COMMENT '菜单标题',
    icon VARCHAR(255) NOT NULL DEFAULT "" COMMENT '菜单图标',
    avatar VARCHAR(255) NOT NULL DEFAULT "" COMMENT '菜单头像',
    background VARCHAR(255) NOT NULL DEFAULT "" COMMENT '菜单背景',
    menu_type CHAR(7) NOT NULL DEFAULT "" COMMENT '菜单类型',
    PRIMARY KEY (id)
) COMMENT '[Resource]MenuVObj';

-- ------------------------------------------
-- --- auth_resource_api                -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_resource_api;

CREATE TABLE IF NOT EXISTS auth_resource_api (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    resource_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '资源Id',
    api_type CHAR(7) NOT NULL DEFAULT "" COMMENT 'Api类型',
    api_path VARCHAR(255) NOT NULL DEFAULT "" COMMENT 'ApiPath',
    PRIMARY KEY (id)
) COMMENT '[Resource]ApiVObj';

-- ------------------------------------------
-- --- auth_resource_extend             -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_resource_extend;

CREATE TABLE IF NOT EXISTS auth_resource_extend (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    update_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Update]更新者 UserId',
    update_time DATETIME NOT NULL COMMENT '[Update]更新时间',
    update_version CHAR(7) NOT NULL DEFAULT "" COMMENT '[Update]乐观锁',
    resource_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '资源Id',
    PRIMARY KEY (id)
) COMMENT '[Resource]ExtendVObj';

-- ------------------------------------------
-- --- auth_link_post_user              -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_link_post_user;

CREATE TABLE IF NOT EXISTS auth_link_post_user (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    post_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '岗位id',
    PRIMARY KEY (id)
) COMMENT '[Link][Post][User]';

-- ------------------------------------------
-- --- auth_link_resource_role          -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_link_resource_role;

CREATE TABLE IF NOT EXISTS auth_link_resource_role (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    resource_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '资源Id',
    role_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '角色Id',
    PRIMARY KEY (id)
) COMMENT '[Link][Resource][Role]';

-- ------------------------------------------
-- --- auth_link_role_user              -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_link_role_user;

CREATE TABLE IF NOT EXISTS auth_link_role_user (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    role_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '角色Id',
    PRIMARY KEY (id)
) COMMENT '[Link][Role][User]';

-- ------------------------------------------
-- --- auth_link_role_dept              -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_link_role_dept;

CREATE TABLE IF NOT EXISTS auth_link_role_dept (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    dept_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '部门Id',
    role_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '角色Id',
    PRIMARY KEY (id)
) COMMENT '[Link][Role][Dept]';

-- ------------------------------------------
-- --- auth_link_post_user_log          -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_link_post_user_log;

CREATE TABLE IF NOT EXISTS auth_link_post_user_log (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    link_post_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'LinkPostUserId',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    post_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '岗位Id',
    PRIMARY KEY (id)
) COMMENT '[Link][Post][User]Log';

-- ------------------------------------------
-- --- auth_link_resource_role_log      -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_link_resource_role_log;

CREATE TABLE IF NOT EXISTS auth_link_resource_role_log (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    link_resource_role_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'LinkResourceRoleId',
    resource_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '资源Id',
    role_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '角色Id',
    PRIMARY KEY (id)
) COMMENT '[Link][Resource][Role]Log';

-- ------------------------------------------
-- --- auth_link_role_user_log          -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_link_role_user_log;

CREATE TABLE IF NOT EXISTS auth_link_role_user_log (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    link_role_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'LinkRoleUserId',
    role_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '角色Id',
    user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '用户Id',
    PRIMARY KEY (id)
) COMMENT '[Link][Role][User]Log';

-- ------------------------------------------
-- --- auth_link_role_dept_log          -----
-- ------------------------------------------
DROP TABLE IF EXISTS auth_link_role_dept_log;

CREATE TABLE IF NOT EXISTS auth_link_role_dept_log (
    id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Default]Id',
    remark VARCHAR(255) NOT NULL DEFAULT "" COMMENT '[Default]备注',
    create_user_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '[Create]创建者 UserId',
    create_time DATETIME NOT NULL COMMENT '[Create]新建时间',
    link_role_dept_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'LinkRoleDeptId',
    role_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '角色Id',
    dept_id BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '部门Id',
    PRIMARY KEY (id)
) COMMENT '[Link][Role][Dept]Log';