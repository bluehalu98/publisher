<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
/* 수정시작 */
define( 'DB_NAME', 'wajin377' ); //dbname

/** MySQL database username */
define( 'DB_USER', 'wajin377' ); //db user id

/** MySQL database password */
define( 'DB_PASSWORD', 'halu!980101' ); //db password

define('WP_HOME', 'http://wajin377.dothome.co.kr/');

define('WP_SITEURL','http://wajin377.dothome.co.kr/');
/* 수정끝 */

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'f%V/l:[(Ir%>sh.sF[4;)M!I^D)D.dZ^,Sx$#bdGOHm#PndLi.%33>n}oM4+K;k>' );
define( 'SECURE_AUTH_KEY',  '0.r)5r>+ivUjMHS-2Q=3)Cm;yp&wN`$xL(ml&Dw*QoA2Y6PyvMqokHn#6<7+0Fhc' );
define( 'LOGGED_IN_KEY',    'c7pyZXtrE4RPTKYH|xp5Ezc*^}YEttg@%_ -q[rYE)t^X%Zd!aXwYtMIfkNEeBy`' );
define( 'NONCE_KEY',        '&DVe!W9dfmf^JW`=t!tM{:.i%_2dCbB^z=rdghEFt!R1w456W0eu7KqX^{RuSs8=' );
define( 'AUTH_SALT',        'N`8%d}&|HcI,_|GNtvzrw*_k/x7e?Zhk4&<h(Cl.H7+80Q!w  iWW{(r>/~Kw#)~' );
define( 'SECURE_AUTH_SALT', 'jCzTz(VQ[mNi+2(Byw]^snxJDCD3p4tXp!uG3WN?%Gy~$PR3QVZAB@EmsG%J=4:u' );
define( 'LOGGED_IN_SALT',   '`%{zx53Bj7OBNeTj8FL[qjzmSyn^{[}N+68B,`yJCtF[*4#n.NbdsfX3/=Sm2;4%' );
define( 'NONCE_SALT',       'l+5wOj3,iyIFxO 4<p9npDms#cS_gdSj3.,e6BQ~h21vV#>kH#IjRxs=j)]axpX]' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
