<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bluehalu' );

/** Database username */
define( 'DB_USER', 'bluehalu' );

/** Database password */
define( 'DB_PASSWORD', 'halu!980101' );

/* address */
define('WP_HOME', 'http://bluehalu.dothome.co.kr');

define('WP_SITEURL','http://bluehalu.dothome.co.kr');

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'X]o/:1GsX:uV_/!Wf$dimdY0zOdq#l!o1,LPD;Bdibx+o;ViE?@F8)3UtVJ)!7{,' );
define( 'SECURE_AUTH_KEY',  'yaV+6!8&ru6lQcf9<p!@c?l^d_2-I6Lp,BeRLqHzy37FxE(7+k0o@[mQNtjXDx(7' );
define( 'LOGGED_IN_KEY',    'GX! 1Okz47gPS6bb=?^byL$XRd}}9kvYcAP+LW]Uelgb}__H%P7mo3iy7h 7^%!;' );
define( 'NONCE_KEY',        '?%51.z{]G*csbstWM[#2=j$6L:s4pRTNZM$;}y#-O]1!C]2)hS{FwJf;SbmM*Kb}' );
define( 'AUTH_SALT',        'U]s,P}W_&?OnW$),k2GMd35O,0<)R[1Sp$6a,NaWg7^io`2P{Q.+my$OnDH,E8RM' );
define( 'SECURE_AUTH_SALT', '=Uq&:Ot F%.&)XQR.X[blG47!C`[S_<LIg/=HQEIBFTd!mnaJ^gd&,$eD],{O`*{' );
define( 'LOGGED_IN_SALT',   '!-uR1pu|H<m4)^`a6$jC}P(~UO=xKF;JRWI};/9*#~&b}&wTKx4TLAOzG`[MSwOD' );
define( 'NONCE_SALT',       'K}jD_b6^]Udkv[`1pIUax7<6w?Dz_F>|]L#Px%[Q{HTg#lYr_M_*d#2`YE#0Scp)' );

/**#@-*/

/**
 * WordPress database table prefix.
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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
