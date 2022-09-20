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

/**수정시작 */
define( 'DB_NAME', 'kjhweb1' ); //dbname
define( 'DB_USER', 'kjhweb1' );//db user id
define( 'DB_PASSWORD', 'rlawlsgud0622!' );//db password
define('WP_HOME', 'http://kjhweb1.dothome.co.kr');
define('WP_SITEURL','http://kjhweb1.dothome.co.kr');
/**수정끝 */

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
define( 'AUTH_KEY',         '+0~8@XkasqTX-(d:`[fQ/c(-M@%~4&X,zBo_CK,v9=aSjUx.U1RyffUIn5WN@[.#' );
define( 'SECURE_AUTH_KEY',  '!!0}h$aWI !j%ue`}5PH33D:kF7JG@$fYUq,|})j4Ukt*rc15dN!gw5DXi,9Caa`' );
define( 'LOGGED_IN_KEY',    'TTRs~5}bltuF773N(]O=J-dSxw0;c[*0RyDU1xw5&k)h.uv4X@V3Zgc*|n5 :XZ2' );
define( 'NONCE_KEY',        '#iSQZy!3h)+>!N7%&j_wEDWJ~ncu6J_,$~UIT<eQk3&I+7^JC%57m!4I?n9[#o4H' );
define( 'AUTH_SALT',        '{xjBQy^th#Neh!}.as|M$h+2PjBM-Ds: c`N.,x)0GVv2#BAp9>qp)q[`R#S_W[z' );
define( 'SECURE_AUTH_SALT', '%kT`;W<s3G-Heu(kb.t-!ii,y3k?W.evoSJ8;Eif6)vn-}E6cZ7NAy~c4wF+Cc.g' );
define( 'LOGGED_IN_SALT',   '&&0CoZ:J&i!TV^mDhk0} 0NI:4P5>`,{py%rg;CaW<x5{t2.g,JQg.~I%V~6rn6?' );
define( 'NONCE_SALT',       '-v~<GH..ezWv>> C7~kPQ2-:ZHhV2p|QP}%8kzGUN^>E,jA:elM~(.]g^,(buWa}' );

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
