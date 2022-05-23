
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

async function main(): Promise<void> {
  const Engineering = await prisma.department.create({ data: {
    id: uuidv4(),
    name: 'Engineering',
  }});
  const Publishing = await prisma.department.create({ data: {
    id: uuidv4(),
    name: 'Publishing',
  }});
  const Anthropology = await prisma.department.create({ data: {
    id: uuidv4(),
    name: 'Anthropology',
  }});
  const Sales = await prisma.department.create({ data: {
    id: uuidv4(),
    name: 'Sales',
  }});
  const Security = await prisma.department.create({ data: {
    id: uuidv4(),
    name: 'Security',
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Jeanne',
    surname: 'Tremblay',
    title: 'Desktop publisher',
    email: 'jeanne.tremblay@example.com',
    phoneNumber: '965-618-7152',
    profileImage: 'https://randomuser.me/api/portraits/women/20.jpg',
    departmentId: Publishing.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'تارا',
    surname: 'کریمی',
    title: 'Desktop publisher',
    email: 'tr.khrymy@example.com',
    phoneNumber: '0942-690-4559',
    profileImage: 'https://randomuser.me/api/portraits/women/57.jpg',
    departmentId: Publishing.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Eetu',
    surname: 'Halonen',
    title: 'Desktop publisher',
    email: 'eetu.halonen@example.com',
    phoneNumber: '046-832-84-21',
    profileImage: 'https://randomuser.me/api/portraits/men/44.jpg',
    departmentId: Publishing.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Heidi',
    surname: 'Dixon',
    title: 'Desktop publisher',
    email: 'heidi.dixon@example.com',
    phoneNumber: '0718-387-634',
    profileImage: 'https://randomuser.me/api/portraits/women/0.jpg',
    departmentId: Publishing.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Bernardete',
    surname: 'Silveira',
    title: 'Desktop publisher',
    email: 'bernardete.silveira@example.com',
    phoneNumber: '(58) 6441-6175',
    profileImage: 'https://randomuser.me/api/portraits/women/21.jpg',
    departmentId: Publishing.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Cíntia',
    surname: 'Silveira',
    title: 'Desktop publisher',
    email: 'cintia.silveira@example.com',
    phoneNumber: '(67) 9057-6146',
    profileImage: 'https://randomuser.me/api/portraits/women/45.jpg',
    departmentId: Publishing.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Eleanor',
    surname: 'Dixon',
    title: 'Desktop publisher',
    email: 'eleanor.dixon@example.com',
    phoneNumber: '(967)-593-8822',
    profileImage: 'https://randomuser.me/api/portraits/women/31.jpg',
    departmentId: Publishing.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Sanni',
    surname: 'Anttila',
    title: 'Engineer',
    email: 'sanni.anttila@example.com',
    phoneNumber: '048-393-41-89',
    profileImage: 'https://randomuser.me/api/portraits/women/78.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Benjamin',
    surname: 'Fortin',
    title: 'Engineer',
    email: 'benjamin.fortin@example.com',
    phoneNumber: '702-461-6610',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Noah',
    surname: 'Roberts',
    title: 'Engineer',
    email: 'noah.roberts@example.com',
    phoneNumber: '(827)-644-9449',
    profileImage: 'https://randomuser.me/api/portraits/men/21.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Enes',
    surname: 'Henry',
    title: 'Engineer',
    email: 'enes.henry@example.com',
    phoneNumber: '079 731 15 47',
    profileImage: 'https://randomuser.me/api/portraits/men/27.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Virgílio',
    surname: 'das Neves',
    title: 'Engineer',
    email: 'virgilio.dasneves@example.com',
    phoneNumber: '(23) 7368-9475',
    profileImage: 'https://randomuser.me/api/portraits/men/20.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Romy',
    surname: 'Guerin',
    title: 'Engineer',
    email: 'romy.guerin@example.com',
    phoneNumber: '06-20-51-26-03',
    profileImage: 'https://randomuser.me/api/portraits/women/51.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Andréas',
    surname: 'Van Erkelens',
    title: 'Engineer',
    email: 'andreas.vanerkelens@example.com',
    phoneNumber: '(026)-599-2568',
    profileImage: 'https://randomuser.me/api/portraits/men/0.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Ivana',
    surname: 'Michel',
    title: 'Engineer',
    email: 'ivana.michel@example.com',
    phoneNumber: '079 646 49 78',
    profileImage: 'https://randomuser.me/api/portraits/women/13.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Luis',
    surname: 'Pascual',
    title: 'Engineer',
    email: 'luis.pascual@example.com',
    phoneNumber: '672-450-984',
    profileImage: 'https://randomuser.me/api/portraits/men/60.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Arndt',
    surname: 'Janssen',
    title: 'Engineer',
    email: 'arndt.janssen@example.com',
    phoneNumber: '0176-4245414',
    profileImage: 'https://randomuser.me/api/portraits/men/18.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Benjamin',
    surname: 'Madsen',
    title: 'Engineer',
    email: 'benjamin.madsen@example.com',
    phoneNumber: '43439280',
    profileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Christian',
    surname: 'Garcia',
    title: 'Engineer',
    email: 'christian.garcia@example.com',
    phoneNumber: '633-008-774',
    profileImage: 'https://randomuser.me/api/portraits/men/35.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Besim',
    surname: 'Brunet',
    title: 'Engineer',
    email: 'besim.brunet@example.com',
    phoneNumber: '079 933 53 55',
    profileImage: 'https://randomuser.me/api/portraits/men/58.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Vildan',
    surname: 'Adıvar',
    title: 'Engineer',
    email: 'vildan.adivar@example.com',
    phoneNumber: '(780)-575-6003',
    profileImage: 'https://randomuser.me/api/portraits/women/76.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Emrullah',
    surname: 'Achterberg',
    title: 'Engineer',
    email: 'emrullah.achterberg@example.com',
    phoneNumber: '(748)-814-4455',
    profileImage: 'https://randomuser.me/api/portraits/men/82.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Hunter',
    surname: 'Banks',
    title: 'Engineer',
    email: 'hunter.banks@example.com',
    phoneNumber: '0742-832-301',
    profileImage: 'https://randomuser.me/api/portraits/men/49.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Zack',
    surname: 'Ross',
    title: 'Engineer',
    email: 'zack.ross@example.com',
    phoneNumber: '(814)-598-5262',
    profileImage: 'https://randomuser.me/api/portraits/men/74.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Herman',
    surname: 'Halland',
    title: 'Engineer',
    email: 'herman.halland@example.com',
    phoneNumber: '91599561',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Noura',
    surname: 'Van Mulken',
    title: 'Engineer',
    email: 'noura.vanmulken@example.com',
    phoneNumber: '(402)-106-7136',
    profileImage: 'https://randomuser.me/api/portraits/women/42.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Kirk',
    surname: 'Nichols',
    title: 'Engineer',
    email: 'kirk.nichols@example.com',
    phoneNumber: '081-790-0207',
    profileImage: 'https://randomuser.me/api/portraits/men/47.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Felecia',
    surname: 'Hughes',
    title: 'Engineer',
    email: 'felecia.hughes@example.com',
    phoneNumber: '0490-949-187',
    profileImage: 'https://randomuser.me/api/portraits/women/33.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Emeli',
    surname: 'Helseth',
    title: 'Engineer',
    email: 'emeli.helseth@example.com',
    phoneNumber: '90067706',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Valentin',
    surname: 'Ortiz',
    title: 'Engineer',
    email: 'valentin.ortiz@example.com',
    phoneNumber: '630-153-722',
    profileImage: 'https://randomuser.me/api/portraits/men/14.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Ahmed',
    surname: 'Arnaud',
    title: 'Anthropologist',
    email: 'ahmed.arnaud@example.com',
    phoneNumber: '076 363 73 45',
    profileImage: 'https://randomuser.me/api/portraits/men/27.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Latife',
    surname: 'Tokatlıoğlu',
    title: 'Anthropologist',
    email: 'latife.tokatlioglu@example.com',
    phoneNumber: '(255)-511-9425',
    profileImage: 'https://randomuser.me/api/portraits/women/92.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Sophia',
    surname: 'Holland',
    title: 'Anthropologist',
    email: 'sophia.holland@example.com',
    phoneNumber: '0726-478-217',
    profileImage: 'https://randomuser.me/api/portraits/women/69.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Hanny',
    surname: 'Junghans',
    title: 'Anthropologist',
    email: 'hanny.junghans@example.com',
    phoneNumber: '0171-0213743',
    profileImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Pablo',
    surname: 'Lefebvre',
    title: 'Anthropologist',
    email: 'pablo.lefebvre@example.com',
    phoneNumber: '06-50-93-23-04',
    profileImage: 'https://randomuser.me/api/portraits/men/39.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Severino',
    surname: 'da Costa',
    title: 'Anthropologist',
    email: 'severino.dacosta@example.com',
    phoneNumber: '(96) 0739-4248',
    profileImage: 'https://randomuser.me/api/portraits/men/22.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Alexandre',
    surname: 'Taylor',
    title: 'Anthropologist',
    email: 'alexandre.taylor@example.com',
    phoneNumber: '613-986-6075',
    profileImage: 'https://randomuser.me/api/portraits/men/16.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Manuel',
    surname: 'Washington',
    title: 'Anthropologist',
    email: 'manuel.washington@example.com',
    phoneNumber: '0760-791-638',
    profileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'David',
    surname: 'Carmona',
    title: 'Anthropologist',
    email: 'david.carmona@example.com',
    phoneNumber: '618-594-466',
    profileImage: 'https://randomuser.me/api/portraits/men/52.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Emre',
    surname: 'Ertepınar',
    title: 'Anthropologist',
    email: 'emre.ertepinar@example.com',
    phoneNumber: '(385)-827-3424',
    profileImage: 'https://randomuser.me/api/portraits/men/0.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Gökhan',
    surname: 'Akyüz',
    title: 'Anthropologist',
    email: 'gokhan.akyuz@example.com',
    phoneNumber: '(807)-569-5032',
    profileImage: 'https://randomuser.me/api/portraits/men/63.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Gabriel',
    surname: 'Legrand',
    title: 'Anthropologist',
    email: 'gabriel.legrand@example.com',
    phoneNumber: '06-57-16-76-25',
    profileImage: 'https://randomuser.me/api/portraits/men/85.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Melvin',
    surname: 'Picard',
    title: 'Anthropologist',
    email: 'melvin.picard@example.com',
    phoneNumber: '06-29-22-38-27',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'رهام',
    surname: 'نجاتی',
    title: 'Anthropologist',
    email: 'rhm.njty@example.com',
    phoneNumber: '0939-810-5635',
    profileImage: 'https://randomuser.me/api/portraits/men/93.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Benjamin',
    surname: 'Breiland',
    title: 'Anthropologist',
    email: 'benjamin.breiland@example.com',
    phoneNumber: '97280970',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'ماهان',
    surname: 'زارعی',
    title: 'Anthropologist',
    email: 'mhn.zraay@example.com',
    phoneNumber: '0982-268-5938',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Wilma',
    surname: 'Kuhr',
    title: 'Anthropologist',
    email: 'wilma.kuhr@example.com',
    phoneNumber: '0171-1663141',
    profileImage: 'https://randomuser.me/api/portraits/women/34.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Muhamed',
    surname: 'Francois',
    title: 'Anthropologist',
    email: 'muhamed.francois@example.com',
    phoneNumber: '077 453 08 20',
    profileImage: 'https://randomuser.me/api/portraits/men/89.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Johan',
    surname: 'Thomsen',
    title: 'Anthropologist',
    email: 'johan.thomsen@example.com',
    phoneNumber: '27852859',
    profileImage: 'https://randomuser.me/api/portraits/men/47.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Frenk',
    surname: 'Koeman',
    title: 'Anthropologist',
    email: 'frenk.koeman@example.com',
    phoneNumber: '(943)-637-2360',
    profileImage: 'https://randomuser.me/api/portraits/men/33.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Dean',
    surname: 'Lucas',
    title: 'Anthropologist',
    email: 'dean.lucas@example.com',
    phoneNumber: '0763-693-370',
    profileImage: 'https://randomuser.me/api/portraits/men/59.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Seth',
    surname: 'Bradley',
    title: 'Anthropologist',
    email: 'seth.bradley@example.com',
    phoneNumber: '(344)-300-0551',
    profileImage: 'https://randomuser.me/api/portraits/men/49.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Inácio',
    surname: 'Santos',
    title: 'Anthropologist',
    email: 'inacio.santos@example.com',
    phoneNumber: '(32) 5355-6404',
    profileImage: 'https://randomuser.me/api/portraits/men/24.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Maja',
    surname: 'Blanc',
    title: 'Anthropologist',
    email: 'maja.blanc@example.com',
    phoneNumber: '078 290 92 95',
    profileImage: 'https://randomuser.me/api/portraits/women/52.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Coşkun',
    surname: 'Karaer',
    title: 'Anthropologist',
    email: 'coskun.karaer@example.com',
    phoneNumber: '(243)-361-5575',
    profileImage: 'https://randomuser.me/api/portraits/men/97.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Oliver',
    surname: 'Wilson',
    title: 'Anthropologist',
    email: 'oliver.wilson@example.com',
    phoneNumber: '769-208-9316',
    profileImage: 'https://randomuser.me/api/portraits/men/81.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Eugen',
    surname: 'Eßer',
    title: 'Anthropologist',
    email: 'eugen.esser@example.com',
    phoneNumber: '0173-2617849',
    profileImage: 'https://randomuser.me/api/portraits/men/84.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Aitor',
    surname: 'Alonso',
    title: 'Anthropologist',
    email: 'aitor.alonso@example.com',
    phoneNumber: '667-931-996',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Marlon',
    surname: 'Martinez',
    title: 'Anthropologist',
    email: 'marlon.martinez@example.com',
    phoneNumber: '077 602 89 07',
    profileImage: 'https://randomuser.me/api/portraits/men/8.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Selena',
    surname: 'Augestad',
    title: 'Anthropologist',
    email: 'selena.augestad@example.com',
    phoneNumber: '48930846',
    profileImage: 'https://randomuser.me/api/portraits/women/15.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'ثنا',
    surname: 'رضایی',
    title: 'Anthropologist',
    email: 'thn.rdyy@example.com',
    phoneNumber: '0967-507-9089',
    profileImage: 'https://randomuser.me/api/portraits/women/0.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'April',
    surname: 'Hall',
    title: 'Anthropologist',
    email: 'april.hall@example.com',
    phoneNumber: '0438-248-579',
    profileImage: 'https://randomuser.me/api/portraits/women/90.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Rafael',
    surname: 'Jackson',
    title: 'Anthropologist',
    email: 'rafael.jackson@example.com',
    phoneNumber: '081-637-8443',
    profileImage: 'https://randomuser.me/api/portraits/men/29.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Gregorio',
    surname: 'Fernandez',
    title: 'Anthropologist',
    email: 'gregorio.fernandez@example.com',
    phoneNumber: '670-634-781',
    profileImage: 'https://randomuser.me/api/portraits/men/52.jpg',
    departmentId: Anthropology.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Emilie',
    surname: 'Petersen',
    title: 'Sales',
    email: 'emilie.petersen@example.com',
    phoneNumber: '79146389',
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Marjorie',
    surname: 'Brooks',
    title: 'Sales',
    email: 'marjorie.brooks@example.com',
    phoneNumber: '(823)-399-3456',
    profileImage: 'https://randomuser.me/api/portraits/women/13.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Elin',
    surname: 'Øvretveit',
    title: 'Sales',
    email: 'elin.ovretveit@example.com',
    phoneNumber: '95319694',
    profileImage: 'https://randomuser.me/api/portraits/women/51.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Ernst',
    surname: 'Rosendahl',
    title: 'Sales',
    email: 'ernst.rosendahl@example.com',
    phoneNumber: '0174-6306020',
    profileImage: 'https://randomuser.me/api/portraits/men/41.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Adem',
    surname: 'Karaböcek',
    title: 'Sales',
    email: 'adem.karabocek@example.com',
    phoneNumber: '(047)-938-5300',
    profileImage: 'https://randomuser.me/api/portraits/men/42.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Leo',
    surname: 'Cooper',
    title: 'Sales',
    email: 'leo.cooper@example.com',
    phoneNumber: '(724)-445-7496',
    profileImage: 'https://randomuser.me/api/portraits/men/96.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Carmela',
    surname: 'Nicolas',
    title: 'Sales',
    email: 'carmela.nicolas@example.com',
    phoneNumber: '076 249 52 27',
    profileImage: 'https://randomuser.me/api/portraits/women/21.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Hasan',
    surname: 'Cappelen',
    title: 'Sales',
    email: 'hasan.cappelen@example.com',
    phoneNumber: '47453005',
    profileImage: 'https://randomuser.me/api/portraits/men/75.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Axel',
    surname: 'Robert',
    title: 'Sales',
    email: 'axel.robert@example.com',
    phoneNumber: '06-64-63-57-94',
    profileImage: 'https://randomuser.me/api/portraits/men/65.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Daniel',
    surname: 'Parker',
    title: 'Sales',
    email: 'daniel.parker@example.com',
    phoneNumber: '(488)-101-9488',
    profileImage: 'https://randomuser.me/api/portraits/men/17.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Thom',
    surname: 'Volwater',
    title: 'Sales',
    email: 'thom.volwater@example.com',
    phoneNumber: '(263)-620-1382',
    profileImage: 'https://randomuser.me/api/portraits/men/90.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Angela',
    surname: 'Ramirez',
    title: 'Sales',
    email: 'angela.ramirez@example.com',
    phoneNumber: '0758-538-641',
    profileImage: 'https://randomuser.me/api/portraits/women/21.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Josh',
    surname: 'Newman',
    title: 'Sales',
    email: 'josh.newman@example.com',
    phoneNumber: '0720-368-631',
    profileImage: 'https://randomuser.me/api/portraits/men/46.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Edeltraut',
    surname: 'Niermann',
    title: 'Sales',
    email: 'edeltraut.niermann@example.com',
    phoneNumber: '0171-6220898',
    profileImage: 'https://randomuser.me/api/portraits/women/49.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Brent',
    surname: 'Gibson',
    title: 'Sales',
    email: 'brent.gibson@example.com',
    phoneNumber: '0790-800-737',
    profileImage: 'https://randomuser.me/api/portraits/men/44.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Anouk',
    surname: 'Lecomte',
    title: 'Sales',
    email: 'anouk.lecomte@example.com',
    phoneNumber: '079 142 60 37',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg',
    departmentId: Sales.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Maxence',
    surname: 'Carpentier',
    title: 'Security Gaurd',
    email: 'maxence.carpentier@example.com',
    phoneNumber: '06-05-09-64-36',
    profileImage: 'https://randomuser.me/api/portraits/men/56.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Javier',
    surname: 'Burns',
    title: 'Security Gaurd',
    email: 'javier.burns@example.com',
    phoneNumber: '0419-082-723',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Tinius',
    surname: 'Johannessen',
    title: 'Security Gaurd',
    email: 'tinius.johannessen@example.com',
    phoneNumber: '94315049',
    profileImage: 'https://randomuser.me/api/portraits/men/78.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Zoe',
    surname: 'Smith',
    title: 'Security Gaurd',
    email: 'zoe.smith@example.com',
    phoneNumber: '407-947-3093',
    profileImage: 'https://randomuser.me/api/portraits/women/69.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Malou',
    surname: 'Thomsen',
    title: 'Security Gaurd',
    email: 'malou.thomsen@example.com',
    phoneNumber: '78739810',
    profileImage: 'https://randomuser.me/api/portraits/women/51.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Ece',
    surname: 'Yeşilkaya',
    title: 'Security Gaurd',
    email: 'ece.yesilkaya@example.com',
    phoneNumber: '(260)-418-3696',
    profileImage: 'https://randomuser.me/api/portraits/women/41.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Barcino',
    surname: 'Barros',
    title: 'Security Gaurd',
    email: 'barcino.barros@example.com',
    phoneNumber: '(15) 8128-0237',
    profileImage: 'https://randomuser.me/api/portraits/men/26.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Brittany',
    surname: 'Armstrong',
    title: 'Security Gaurd',
    email: 'brittany.armstrong@example.com',
    phoneNumber: '0493-344-026',
    profileImage: 'https://randomuser.me/api/portraits/women/95.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Marianne',
    surname: 'Stokstad',
    title: 'Security Gaurd',
    email: 'marianne.stokstad@example.com',
    phoneNumber: '41938565',
    profileImage: 'https://randomuser.me/api/portraits/women/8.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Hélèna',
    surname: 'Sanchez',
    title: 'Security Gaurd',
    email: 'helena.sanchez@example.com',
    phoneNumber: '06-97-30-39-31',
    profileImage: 'https://randomuser.me/api/portraits/women/46.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Maudi',
    surname: 'Tosun',
    title: 'Security Gaurd',
    email: 'maudi.tosun@example.com',
    phoneNumber: '(054)-319-7457',
    profileImage: 'https://randomuser.me/api/portraits/women/72.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Patrick',
    surname: 'Morris',
    title: 'Security Gaurd',
    email: 'patrick.morris@example.com',
    phoneNumber: '(152)-578-7480',
    profileImage: 'https://randomuser.me/api/portraits/men/56.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Hilda',
    surname: 'Kelly',
    title: 'Security Gaurd',
    email: 'hilda.kelly@example.com',
    phoneNumber: '0487-211-079',
    profileImage: 'https://randomuser.me/api/portraits/women/7.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Laura',
    surname: 'Francois',
    title: 'Security Gaurd',
    email: 'laura.francois@example.com',
    phoneNumber: '076 568 80 28',
    profileImage: 'https://randomuser.me/api/portraits/women/26.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Thea',
    surname: 'Pedersen',
    title: 'Security Gaurd',
    email: 'thea.pedersen@example.com',
    phoneNumber: '23867858',
    profileImage: 'https://randomuser.me/api/portraits/women/69.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Veronica',
    surname: 'Watkins',
    title: 'Security Gaurd',
    email: 'veronica.watkins@example.com',
    phoneNumber: '(035)-408-0499',
    profileImage: 'https://randomuser.me/api/portraits/women/43.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Ceylan',
    surname: 'Özgörkey',
    title: 'Security Gaurd',
    email: 'ceylan.ozgorkey@example.com',
    phoneNumber: '(132)-874-9045',
    profileImage: 'https://randomuser.me/api/portraits/women/80.jpg',
    departmentId: Security.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Emily',
    surname: 'Vargas',
    title: 'Engineer',
    email: 'emily.vargas@example.com',
    phoneNumber: '(947)-475-9168',
    profileImage: 'https://randomuser.me/api/portraits/women/80.jpg',
    departmentId: Engineering.id,
  }});
  await prisma.employee.create({ data: {
    id: uuidv4(),
    forename: 'Kjelt',
    surname: 'Ceelen',
    title: 'Desktop publisher',
    email: 'kjelt.ceelen@example.com',
    phoneNumber: '(136)-903-1468',
    profileImage: 'https://randomuser.me/api/portraits/men/33.jpg',
    departmentId: Publishing.id,
  }});
}


void main().then(() => {
  console.log('done');
});

