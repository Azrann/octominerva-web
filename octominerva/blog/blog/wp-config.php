<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'octominexcuser1');

/** MySQL database username */
define('DB_USER', 'octominexcuser1');

/** MySQL database password */
define('DB_PASSWORD', 'REPLACE_WITH_YOUR_VALUE');

/** MySQL hostname */
define('DB_HOST', 'mysql51-151.perso');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'REPLACE_WITH_YOUR_VALUE');
define('SECURE_AUTH_KEY',  'REPLACE_WITH_YOUR_VALUE');
define('LOGGED_IN_KEY',    '<jB%J-;-C_fWbu^yJqgpi;#RWj|QF.&L|$v45cO%H4R1OC4>sE3z^r.Js5w=)|cd');
define('NONCE_KEY',        'T%Sihi@P2U*m;Bzi8 eaf3~GV@Oe[qH-p}KIX=iZFu.bmFt1>Ll?atP>];%zUFF!');
define('AUTH_SALT',        '?y^bgGim VNmQqzq{mN:$UJ=l1;Tws(^nmK((~uM~9R~_P/(dL1;vsq0OoX^G)$X');
define('SECURE_AUTH_SALT', 'sm%|D#qzMtotGl-Z`_Sa^{g/eWaAkA>y_Q@=I+XpMdZcj-tMPq{y~0c^/HIV7.c=');
define('LOGGED_IN_SALT',   '?SZvlirH:T P~j-8^0*S;|~xlLvCS|0-oD+/S#.)C2 6P(~@izZ2y&C2q^#*u8RJ');
define('NONCE_SALT',       '((he3dAKV#/%bEo6[AA-a|iFFTAs*9kURw.Xa0+.:yTVyEPZ2|K<NzhE=xnqr?U]');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
