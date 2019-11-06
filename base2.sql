-- --------------------------------------------------------
-- Hôte :                        dz8959rne9lumkkw.chr7pe7iynqr.eu-west-1.rds.amazonaws.com
-- Version du serveur:           5.7.26-log - Source distribution
-- SE du serveur:                Linux
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Listage des données de la table lylsua4wgaljezp0.customer : ~67 rows (environ)
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `home_phone`, `comment`, `adress`, `postal_code`, `town`) VALUES
	(5, 'ANNIE', 'ABER', 'ventgog@gmail.com', '0665252881', '', '', '19 CH DU PEYLOUBIER ', '06530', 'PEYMEINADE'),
	(6, 'NOEMI', 'ACCRISTO', 'noemiaccristo@gmail.com', '06 98 52 29 99', '', '', '96 CH DE LA DRAGONNIERE', '06130', 'GRASSE'),
	(7, 'GENEVIEVE', 'ACERO', 'genevieve.acero@orange.fr', '06 78 18 02 96', '', '', '82 CH DE LA MADONETTE', '06530', 'SPERACEDES'),
	(8, 'ROSE MARIE', 'ALTERO', '', '', '', '', '62 AV DE BOUTIGNY', '06530', 'PEYMEINADE'),
	(9, 'PASCAL', 'AMAND', ' pascalamand@yahoo.com', '06 73 95 99 79', '', '', '', '', ''),
	(10, 'JACQUELINE', 'ARNAUD', 'jacqueline.arnaud67@sfr.fr', '06 22 07 52 30', '', '', '21 CH DES CYPRES', '06530', 'PEYMEINADE'),
	(11, 'SOPHIE', 'ASTIER', '', '09 83 48 49 07', '', '', '255 AV DE PEYGROS', '06530', 'PEYMEINADE'),
	(12, 'DOMINIQUE', 'BALDACCI', 'dominiquebaldacci@hotmail.fr', '06 66 34 14 16', '', '', '19 CH DU PEYLOUBIER', '06530', 'PEYMEINADE'),
	(14, 'M France', 'BASTELICA', 'loetitia.bastelica@gmail.com', '04 93 66 38 57', '', '', ' 16 CH DU SUYE', '06530', 'PEYMEINADE'),
	(15, 'LOETICIA', 'BASTELLICA', '', '06 64 26 38 57', '', '', '16 CH DU SUYE', '06530', 'PEYMEINADE'),
	(17, 'CHRIS', 'BELL', 'verd.chris@hotmail.fr ', '07 71 12 21 48', '', '', '385 BD DR BELLETRUD', '06530', 'CABRIS'),
	(18, 'MONIQUE', 'BERTUCCI', 'monique.bertucci@wanadoo.fr ', '06 72 52 94 24', '', '', ' 129 AV DE PEYGROS', '06530', 'PEYMEINADE'),
	(19, 'CHRISTINE', 'BOTTE', 'airiau.christine@gmail.com', '06 85 68 88 25', '', '', 'QUARTIER DES SAOUVES', '06530', 'PEYMEINADE'),
	(20, 'M THERESE', 'BREANT', ' maritheverdonibreant@orange.fr', '06 82 24 56 06', '', '', ' 114 CH DES VEYANTS', '06530', 'LE TIGNET'),
	(21, 'FRANCOISE', 'BROUSTEAU', 'francoise.brousteau@orange.fr', '06 87 58 09 36', '', '', '9 CH DE SASSY', '06530', 'PEYMEINADE'),
	(22, 'MARCELLE', 'CAMBIER', 'cambier-raymar@hotmail.fr', '06 10 34 00 37', '', '', '20 AV FUNEL', '06530', 'PEYMEINADE'),
	(23, 'ANTONIA', 'CARE', '', '', '', '', '548 CH DES PLANASTAUX', '06530', 'LE TIGNET'),
	(24, 'CHRISTINE', 'CARRIER', 'christine.carrier@9online.fr', '', '', '', '137 CH DU CLOS DENTOURES ', '06530', 'CABRIS'),
	(25, 'MARIELLE', 'CHA', 'marielcha.fr@gmail.com', '', '', '', ' AV DES MOULINS ', '06530', 'LE TIGNET'),
	(26, ' FRANCOISE ', 'CHARMEUX', ' fg-charmeux@orange.fr ', '06 75 23 89 02', '', '', '1201 AV BELLETRUD', '06530', 'CABRIS'),
	(27, 'KARIN', 'CHEVILLON', 'tribuchevillon@gmail.com', '06 63 32 37 52', '', '', '1750 CH DE BELLUNY', '83440', 'TANNERON'),
	(28, 'MARTINE', 'CITERNE', 'm.citerne03@hotmail.com', '06 81 21 88 75', '', '', '1930 CH DE STRAMOUSSE', '06530', 'Cabris'),
	(29, 'CAROLINE', 'COCHENNEC', 'cochennec.martin@gmail.com', '06 23 06 71 31', '', '', '9 BD A PREMIER', '06130', 'GRASSE'),
	(30, 'MAGALI', 'COTTON', 'cottonfred@yahoo.fr', '06 05 20 35 78', '', '', '12 BD COURMES', '06530', ' ST CEZAIRE'),
	(31, 'ROSE ', 'CUTRI', '', '04 93 09 16 69', '', '', ' 62 AV DE BOUTIGNY ', '06530', 'PEYMEINADE'),
	(32, 'JULIEN', 'DAMBAS', '0689698350@orange.fr ', '06 89 69 83 50', '', '', '5 SQUARE RASTIGNY', '06130', 'GRASSE'),
	(33, 'M HELENE ', 'DAMIENS', ' hm.damiens@gmail.com', '06 70 01 43 41', '', '', '124CH DE LA CROIX DE CISELLE', '06530', 'CABRIS'),
	(34, 'PATRICIA', 'DARMON', 'pat.darmon@free.fr ', '07 68 98 17 37', '', '', '30AV DES TERMES', '06530', 'PEYMEINADE'),
	(35, 'SUZANNE', 'DE CARNAVALET', 'smcarnavalet@gmail.com', '', '', '', '971 BD BELLETRUD ', '06530', ' CABRIS'),
	(36, 'MC', 'DEFONTMICHEL', 'mcdefontmichel@gmail.com ', '06 85 20 70 41', '', '', ' 18 R A DE GRASSE', '06130', ' GRASSE'),
	(37, 'SUZANNAH', 'ELLENA', 'susannah5@wanadoo.fr', '06 79 60 59 24', '', '', '17 CH DE LA MOLIERE', '06530', 'SPERACEDES'),
	(38, 'VIRGINIE', 'FANTE', 'marvirg.5@orange.fr', '06 34 96 38 23', '', '', '48 AV DR BELLETRUD', '06530', 'PEYMEINADE'),
	(39, 'CHRISTINE', 'FERRE', 'christine.ferre06@orange.fr', '06 84 62 92 11', '', '', '227 CH DU CARTINET', '06530', 'CABRIS'),
	(40, 'CATHERINE', 'GASQ', 'katy.gasq@gmail.com', '06 99 07 47 35', '', '', '13 CH DE LA CHAPELLE DES CHIENS', '06130', 'GRASSE'),
	(41, 'CELINE', 'LEGAGNEUX', 'cecemel1@free.fr', '06 50 11 54 24', '', '', '26 AV DE BOUTIGNY', '06530', 'PEYMEINADE'),
	(42, 'EDDA', 'HARKNESS', 'edda2009@hotmail.fr', '06 22 66 11 70', '', '', '994 CH DU FLAQUIER', '06530', 'LE TIGNET'),
	(43, 'MURIEL', 'HAVERON', 'muhaveron@hotmail.fr', '06 60 61 13 11', '', '', '1323 CH DU MONESTIER', '06530', 'CABRIS'),
	(44, 'DANIELLE', 'ITIER', 'jditier@orange.fr', '06 79 07 47 60', '', '', '29 BD DR BELLETRUD', '06530', 'PEYMEINADE'),
	(45, 'CLAIRE', 'JUNCA', 'claryco@wanadoo.fr', '06 17 66 09 89', '', '', '13 CH DES BERENGUIERS', '06530', 'PEYMEINADE'),
	(46, 'ANNE', 'LAPALU', 'al.lapalu@gmail.com', '06 66 02 31 75', '', '', '15 CH DU SUYE ', '06530', 'PEYMEINADE'),
	(47, 'EMILIE', 'LAZARE', 'lazare_emilie@yahoo.com', '06 25 40 79 98', '', '', '265 AV DE PEYGROS', '06530', 'PEYMEINADE'),
	(48, 'MARIE', 'LERUEZ', ' mfjleruez@sfr.fr', '06 80 04 80 36', '', '', '234 AV DE PEYGROS', '06530', 'PEYMEINADE'),
	(49, 'BERNADETTE', 'MANGIN', 'bjmangin@free.fr', '07 81 60 09 48', '', '', '76 CH DES BASSES RIVES', '06130', 'GRASSE'),
	(50, 'Risalina', 'MERCADO', '', '', '', '', '42 Av Dr Belletrude', '06530', 'PEYMEINADE'),
	(51, 'LAURENCE', 'MIELLE', 'laurencemoselle@free.fr', '06 89 94 16 68', '', '', '521 CH DE POURCIEUX', '06530', 'CABRIS'),
	(52, 'FABIENNE', 'MILLIARY', 'fabienne.milliary@gmail.com', '', '', '', '33 AV FREDERIC MISTRAL', '06530', 'PEYMEINADE'),
	(53, 'PENELOPE', 'MONIN', 'claudemonin@online.fr', '06 81 04 07 20', '', '', '1051 AV DE LA PLANTADE', '06530', 'CABRIS'),
	(54, 'VERONIQUE', 'MORANDI', 'veronique.morandi@gmail.com', '06 71 35 36 83', '', '', '84 AV DE GRASSE', '06530', 'PEYMEINADE'),
	(55, 'JANY', 'NIARFEIX', ' janyroux@gmail.com ', '06 15 47 52 73', '', '', '168 CH DES CHENES', '06530', 'LE TIGNET'),
	(56, 'ELISABETH', 'NOE', 'e.noe0@laposte.net ', '06 81 31 34 25', '', '', '755 ROUTE NAPOLEON', '06460', 'ST VALLIER '),
	(57, 'MONIQUE', 'PANAIVA', 'monique.panaiva@wanadoo.fr', '06 62 56 27 68', '', '', '2709 RTE DE GRASSE', '06530', 'ST CEZAIRE'),
	(58, 'FRANCOISE', 'REDA', ' manureda@hotmail.fr', '06 63 11 56 72', '', '', '59 AV DE BOUTIGNY', '06530', 'PEYMEINADE'),
	(59, 'CHANTAL', 'SALIM', 'ouani.salim@gmail.com ', '', '', '', '253 AV DE PEYGROS', '06530', 'PEYMEINADE'),
	(60, 'ANNICK', 'SELLES', 'jean.selles@wanadoo.fr ', '06 61 53 84 07', '', '', '532 CH CASTELLARAS', '06530', 'LE TIGNET'),
	(61, 'ISABELLE', 'SESSEGOLO', 'sessegolo-isabelle@bbox.fr', '06 77 41 63 84', '', '', '31 RTE DE ST MATHIEU BAT NIAGARA B', '06130', 'GRASSE'),
	(62, 'CAROLINE', 'SOUDAIN', 'caroline.soudain@orange.fr', '06 73 61 54 86', '', '', '19 RUE FREDERIC MISTRAL', '06530', 'CABRIS'),
	(63, 'EMILIE', 'BARESI', 'emilieolivier@hotmail.fr', '0662443881', NULL, '', '266 ch du greillon', '83440', 'montauroux'),
	(66, ' CHRISTIANE', 'SKORA', 'christiane.skora@gmail.com', '06 75 89 86 98', NULL, '', ' 11 TRAVERSE DES VALLONS', '06530', ' PEYMEINADE '),
	(67, ' MARIE CL', 'VANDERUS', 'mc.vanderus@gmail.com', '06 61 00 69 99', NULL, '', '33 AV MISTRAL', '06530', 'Peymeinade'),
	(68, 'Lydie', 'VERNES', 'alain.vernes@orange.fr', '04 93 42 20 09', NULL, '', ' 291 PROM ST JEAN ', '06530', 'Cabris'),
	(69, 'Elysabeth', 'Viale', '', '06 50 59 58 00', NULL, '', ' 8BD DU GL DE GAULLE ', '06530', ' PEYMEINADE '),
	(72, 'GABRIELLE', 'BOSELLI', '', '06 25 37 38 02', NULL, '', '41 CHEMIN DE GUIMOTTE', '06530 ', 'PEYMEINADE'),
	(73, 'FRANCESCA', 'CASANOVA', '', '04 93 66 04 25', NULL, '', '126 AV DR BELLETRUD', '06530', 'PEYMEINADE'),
	(74, 'JEAN MICHEL', 'BATTESTI', 'jean-michel.battesti@numericable.fr', '0611412458', NULL, '', '7 camin de la pitchoune', '06530', 'PEYMEINADE'),
	(75, 'CHANTAL', 'BATTESTI', 'chantal.battesti06530@gmail.com', '0612777341', NULL, '', '7 camin de la pitchoune', '06530', 'peymeinade'),
	(77, 'EVELYNE', 'RUFIN', 'lis06@hotmail.fr', '0671663239', NULL, '', '16 ch des maures ', '06530', 'peymeinade'),
	(78, 'monique', 'toni', 'moniquetoni@hotmail.com', '06 86 87 07 35', NULL, '', '385 bd dr belletrud', '06530', 'CABRIS'),
	(79, 'AURELIE', 'DAVITO', 'aurelie.davito@outlook.fr', '06 27 84 66 86', NULL, '', '285 CH DU MILIEU', '84460', 'CHEVAL BLANC'),
	(80, 'MARIE FRANCOISE', 'BRUN', '', '', NULL, '', '6 PLACE BAPTISTIN PORRE', '06530', 'PEYMEINADE'),
	(81, 'BEATRICE', 'CHAULIAT', 'beatricechauliat@free.fr', '0614388008', NULL, '', '16 CHEMIN DU SUYE', '06530', 'PEYMEINADE'),
	(82, 'BEATRICE', 'GUIFFRAY', 'guiffray.beatrice@neuf.fr', '0622498919', NULL, '', '4 PLACE ST EXUPERY', '06530', 'CABRIS'),
	(84, 'EVELYNE', 'HENRIOT', 'evelynehenriot06@gmail.com', '06 11 42 82 18', NULL, '', '124 CH DE LA CROIX DE CISELLE', '06530', 'CABRIS');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;

-- Listage des données de la table lylsua4wgaljezp0.customers : ~0 rows (environ)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Listage des données de la table lylsua4wgaljezp0.first_name : ~0 rows (environ)
/*!40000 ALTER TABLE `first_name` DISABLE KEYS */;
/*!40000 ALTER TABLE `first_name` ENABLE KEYS */;

-- Listage des données de la table lylsua4wgaljezp0.invoice : ~60 rows (environ)
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` (`id`, `customer_id`, `year`, `amount`, `subscription`, `medical_certificate`, `subscription_type`, `january`, `february`, `march`, `april`, `may`, `july`, `june`, `august`, `september`, `october`, `november`, `december`, `insurance`) VALUES
	(1, 5, '2019', 150, 15, 1, 'PARTIEL', 15, 15, 15, 15, 15, 15, 15, 0, 0, 30, 15, 15, 'OUI'),
	(60, 7, '2019', 250, 15, 0, 'COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'OUI'),
	(64, 11, '2019', 250, 15, 1, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'OUI'),
	(65, 12, '2019', 250, 15, 1, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'OUI'),
	(68, 17, '2019', 250, 15, 1, 'COMPLET ', 80, 0, 0, 80, 0, 0, 0, 0, 0, 105, 0, 0, 'OUI'),
	(69, 18, '2019', 250, 15, 0, ' COMPLET ', 50, 0, 0, 0, 0, 0, 0, 0, 65, 50, 50, 50, 'OUI'),
	(70, 19, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(71, 20, '2019', 250, 15, 1, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'OUI'),
	(72, 21, '2019', 250, 15, 1, 'COMPLET', 40, 40, 40, 0, 0, 0, 0, 0, 60, 0, 45, 45, 'NON'),
	(73, 22, '2019', 75, 15, 1, 'PARTIELLE', 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 'NON'),
	(74, 23, '2019', 250, 15, 1, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'OUI'),
	(75, 24, '2019', 250, 15, 0, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(76, 25, '2019', 250, 15, 0, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'NON'),
	(77, 26, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(78, 27, '2019', 125, 15, 0, 'PARTIELLE', 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 'NON'),
	(79, 28, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 165, 0, 100, 'NON'),
	(80, 29, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'NON'),
	(81, 30, '2019', 250, 15, 1, ' COMPLET ', 50, 50, 0, 0, 0, 0, 0, 0, 0, 65, 50, 50, 'OUI'),
	(82, 31, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 125, 'NON'),
	(83, 32, '2019', 250, 15, 0, 'COMPLET', 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 40, 25, 'NON'),
	(84, 33, '2019', 250, 15, 0, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 125, 'NON'),
	(85, 34, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(86, 35, '2019', 250, 15, 0, 'PARTIELLE', 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 150, 0, 'NON'),
	(87, 36, '2019', 250, 0, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 'NON'),
	(88, 37, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'NON'),
	(89, 38, '2019', 250, 15, 0, 'COMPLET', 0, 50, 0, 50, 0, 50, 0, 0, 15, 50, 0, 50, 'NON'),
	(90, 39, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 'NON'),
	(91, 40, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(92, 41, '2019', 100, 0, 0, ' PARTIELLE ', 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 'NON'),
	(93, 42, '2019', 250, 15, 0, ' COMPLET ', 0, 50, 0, 50, 0, 50, 0, 0, 0, 65, 0, 50, 'NON'),
	(94, 43, '2019', 250, 15, 1, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(95, 44, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(96, 45, '2019', 250, 15, 0, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'NON'),
	(97, 46, '2019', 125, 15, 1, 'PARTIEL', 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 60, 0, 'OUI'),
	(98, 47, '2019', 250, 15, 0, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'NON'),
	(99, 48, '2019', 250, 15, 1, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'NON'),
	(100, 49, '2019', 250, 15, 0, 'COMPLET', 125, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 'NON'),
	(101, 50, '2019', 250, 15, 0, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(102, 51, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'NON'),
	(103, 52, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(104, 53, '2019', 250, 15, 0, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'NON'),
	(105, 54, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'NON'),
	(106, 55, '2019', 250, 15, 0, ' COMPLET ', 50, 0, 0, 0, 0, 0, 0, 0, 0, 115, 50, 50, 'NON'),
	(107, 56, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(108, 57, '2019', 250, 15, 0, ' COMPLET ', 125, 0, 0, 0, 0, 0, 0, 0, 0, 140, 0, 0, 'NON'),
	(109, 58, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 100, 100, 'NON'),
	(110, 59, '2019', 250, 15, 0, 'COMPLET ', 50, 0, 0, 0, 0, 0, 0, 0, 0, 115, 50, 50, 'NON'),
	(111, 60, '2019', 250, 15, 0, ' COMPLET ', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'NON'),
	(112, 61, '2019', 250, 15, 0, 'COMPLET', 0, 0, 60, 0, 0, 60, 0, 0, 85, 0, 0, 60, 'NON'),
	(113, 62, '2019', 250, 15, 0, 'COMPLET', 25, 25, 25, 25, 25, 25, 0, 0, 40, 25, 25, 25, 'NON'),
	(122, 63, '2019', 250, 15, 0, 'COMPLET', 0, 50, 0, 50, 0, 0, 50, 0, 0, 65, 0, 50, 'OUI'),
	(125, 66, '2019', 250, 15, 1, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 'OUI'),
	(126, 67, '2019', 250, 15, 1, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 0, 'OUI'),
	(127, 68, '2019', 250, 15, 1, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 190, 0, 0, 0, 'NON'),
	(128, 69, '2019', 250, 15, 1, 'PARTIEL', 0, 0, 0, 0, 0, 0, 0, 0, 88.33, 0, 0, 0, 'NON'),
	(129, 72, '2019', 100, 15, 0, 'PARTIEL', 0, 0, 0, 0, 0, 0, 0, 0, 0, 115, 0, 0, 'NON'),
	(131, 73, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 'NON'),
	(132, 74, '2019', 250, 30, 0, 'COMPLET', 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 80, 50, 'NON'),
	(133, 75, '2019', 250, 0, 0, 'COMPLET', 0, 0, 0, 50, 50, 50, 50, 50, 0, 0, 0, 0, 'NON'),
	(134, 77, '2019', 200, 15, 0, 'COMPLET', 25, 25, 25, 25, 25, 0, 25, 0, 0, 0, 40, 25, 'NON'),
	(136, 78, '2019', 250, 15, 0, 'COMPLET', 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 80, 'NON'),
	(137, 79, '2019', 250, 15, 0, 'COMPLET', 0, 60, 0, 65, 0, 0, 0, 0, 0, 0, 80, 60, 'NON'),
	(138, 80, '2019', 250, 15, 0, 'COMPLET', 0, 50, 0, 50, 0, 0, 50, 0, 0, 65, 0, 50, 'OUI'),
	(139, 81, '2019', 450, 0, 0, 'COMPLET', 150, 0, 150, 0, 0, 0, 0, 0, 0, 0, 150, 0, 'NON'),
	(140, 82, '2019', 250, 15, 0, 'COMPLET', 80, 0, 80, 0, 0, 0, 0, 0, 0, 0, 105, 0, 'OUI'),
	(141, 84, '2019', 250, 15, 0, 'COMPLET', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 'NON');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;

-- Listage des données de la table lylsua4wgaljezp0.migration_versions : ~5 rows (environ)
/*!40000 ALTER TABLE `migration_versions` DISABLE KEYS */;
INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
	('20191012181959', '2019-10-25 13:38:33'),
	('20191012183347', '2019-10-25 13:38:34'),
	('20191012190344', '2019-10-25 13:38:34'),
	('20191025072545', '2019-10-25 13:38:35'),
	('20191025094738', '2019-10-25 13:38:35'),
	('20191025174445', '2019-10-25 17:53:38');
/*!40000 ALTER TABLE `migration_versions` ENABLE KEYS */;

-- Listage des données de la table lylsua4wgaljezp0.user : ~0 rows (environ)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`) VALUES
	(2, 'guilhem.thomas@free.fr', '["ROLE_ADMIN"]', '$argon2id$v=19$m=65536,t=4,p=1$N2FBU2taWGZsbWpuSEo0Lg$+1nbtpxRvHMFIIfzwhfsv3txs+wf5n35hndpuSOfb7A', 'Guilhem', 'Thomas'),
	(3, 'sim@free.fr', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$YTZMakpnbXJjWkljOHkuYw$6jGLUUdCXjSvbanj1hJj/XCTfep16bBa+7el4OKJRWc', 'Lisa', 'Simson'),
	(4, 'fanellarro@free.fr', '["ROLE_ADMIN"]', '$argon2id$v=19$m=65536,t=4,p=1$Y0NIeXp3MklVVmxXVWZpMQ$jiqHHTVkUEknV2sG5JZaI5yZdMQri9AR5Ud6ZDSs9ek', 'Marie Francoise', 'Quérette');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
