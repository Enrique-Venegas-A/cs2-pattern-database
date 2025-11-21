//def_index
const SKINS_IDS = {
  AK: 7,
  FLIP: 505,
  KARAMBIT: 507,
  M9_BAYONET: 508,
};

//paint_seed
const PAINT_IDS = {
  CASE_HARDENED: 44,
  MARBLE_FADE: 413,
  DOPPLER_PHASE_1: 418,
  DOPPLER_PHASE_2: 419,
  DOPPLER_PHASE_4: 421,
  GAMMA_DOPPLER_PHASE_1: 569,
  GAMMA_DOPPLER_PHASE_3: 571,
};

const PATTERN_DATABASE = {
  [SKINS_IDS.FLIP]: {
    [PAINT_IDS.MARBLE_FADE]: {
      'F&I Tier 1': { seeds: [], order: 1 },
      'F&I Tier 2': { seeds: [], order: 2 },
      'F&I Tier 3': { seeds: [], order: 3 },
      'F&I Tier 4': { seeds: [], order: 4 },
      'F&I Tier 5': { seeds: [], order: 5 },
      'F&I Tier 6': { seeds: [], order: 6 },
      'F&I Tier 7': { seeds: [], order: 7 },
      'F&I Tier 8': { seeds: [], order: 8 },
      'F&I Tier 9': { seeds: [], order: 9 },
      'F&I Tier 10': { seeds: [], order: 10 },
      'Max Fake': { seeds: [], order: 11 },
      FFI: { seeds: [], order: 12 },
    },
    [PAINT_IDS.DOPPLER_PHASE_1]: {},
    [PAINT_IDS.DOPPLER_PHASE_2]: {
      'Max Pink - Tier 1': {
        seeds: [
          7, 39, 59, 72, 77, 106, 119, 153, 166, 190, 194, 209, 244, 259, 265,
          279, 286, 290, 360, 369, 374, 383, 408, 409, 419, 423, 432, 443, 469,
          502, 526, 574, 594, 595, 600, 638, 646, 650, 659, 720, 816, 839, 857,
          859, 861, 893, 896, 913, 951, 954, 969, 983, 999,
        ],
        order: 1,
      },
      'Max Pink - Tier 2': {
        seeds: [
          13, 20, 24, 49, 66, 88, 96, 113, 116, 134, 160, 174, 189, 193, 217,
          218, 220, 226, 235, 237, 250, 284, 303, 325, 373, 394, 425, 450, 464,
          477, 480, 492, 498, 504, 529, 531, 532, 552, 560, 610, 616, 627, 680,
          689, 699, 711, 715, 716, 730, 739, 744, 750, 783, 820, 843, 852, 865,
          871, 919, 926, 935, 973, 992, 998,
        ],
        order: 2,
      },
      'Max Pink - Tier 3': {
        seeds: [
          4, 31, 42, 44, 45, 54, 75, 83, 102, 115, 132, 142, 143, 162, 184, 185,
          221, 231, 248, 253, 262, 269, 280, 296, 311, 317, 349, 352, 355, 371,
          384, 386, 387, 398, 410, 434, 436, 451, 484, 490, 507, 510, 523, 540,
          544, 547, 551, 558, 579, 598, 603, 611, 634, 642, 675, 678, 684, 693,
          694, 721, 731, 733, 767, 772, 784, 853, 855, 883, 890, 928, 939, 986,
        ],
        order: 3,
      },
      'Max Pink - Tier 4': {
        seeds: [
          5, 17, 35, 92, 100, 101, 120, 122, 127, 131, 135, 144, 158, 159, 169,
          180, 186, 197, 198, 208, 219, 225, 242, 247, 261, 263, 268, 275, 288,
          305, 306, 320, 330, 338, 339, 362, 366, 391, 407, 417, 420, 426, 456,
          467, 472, 474, 476, 478, 495, 497, 500, 503, 505, 509, 519, 534, 542,
          557, 562, 563, 581, 585, 609, 622, 623, 669, 671, 679, 681, 682, 692,
          704, 708, 748, 755, 768, 771, 779, 788, 796, 833, 862, 927, 952, 965,
          985, 987,
        ],
        order: 4,
      },
    },
    [PAINT_IDS.GAMMA_DOPPLER_PHASE_1]: {
      'Diamond Gem - Purple - Tier 1': {
        seeds: [
          20,49,66,88,96,113,143,151,160,164,184,189,217,218,220,226,246,250,258,310,325,373,425,450,477,479,480,530,532,552,574,580,610,627,680,689,699,709,716,730,744,776,783,820,843,929,998
        ],
        order: 1,
      },
      'Diamond Gem - Purple - Tier 2': {
        seeds: [
          7,24,31,59,106,116,119,134,166,174,190,193,209,235,284,286,290,303,369,374,394,409,419,432,443,464,492,498,504,526,529,531,551,560,594,616,646,715,750,816,839,852,865,919,935,951,954,969,992,999
        ],
        order: 2,
      },
      'Diamond Gem - Purple - Tier 3': {
        seeds: [
          13,39,44,72,75,77,83,115,153,194,231,237,248,259,265,279,349,352,355,360,371,383,386,408,410,423,434,469,490,502,510,595,600,603,638,659,675,684,694,711,720,772,857,859,861,883,893,896,913,926,928,973,986
        ],
        order: 3,
      },
      'Diamond Gem - Purple - Tier 4': {
        seeds: [
          17,122,127,132,159,169,186,197,198,208,219,221,242,244,263,306,317,330,339,362,398,407,467,472,476,478,484,497,519,523,534,542,544,557,558,562,585,634,650,669,679,681,708,721,731,739,784,788,796,855,862,871,890,927,952,983
        ],
        order: 4,
      },
    },
  },
  [SKINS_IDS.KARAMBIT]: {
    [PAINT_IDS.MARBLE_FADE]: {
      'F&I Tier 1': { seeds: [412], order: 1 },
      'F&I Tier 2': {
        seeds: [16, 146, 241, 359, 393, 541, 602, 649, 688, 701],
        order: 2,
      },
      'F&I Tier 3': {
        seeds: [152, 281, 292, 344, 628, 673, 743, 777, 792, 994],
        order: 3,
      },
      'F&I Tier 4': {
        seeds: [48, 126, 129, 332, 780, 787, 874, 908, 918, 923],
        order: 4,
      },
      'F&I Tier 5': {
        seeds: [
          182, 204, 252, 457, 522, 578, 652, 660, 685, 705, 736, 832, 988,
        ],
        order: 5,
      },
      'F&I Tier 6': {
        seeds: [
          112, 230, 340, 356, 444, 452, 471, 607, 621, 631, 761, 773, 873, 876,
          982,
        ],
        order: 6,
      },
      'F&I Tier 7': {
        seeds: [
          8, 14, 32, 58, 108, 213, 233, 243, 274, 405, 454, 614, 653, 683, 728,
          732, 770, 795, 803, 826, 867, 949,
        ],
        order: 7,
      },
      'F&I Tier 8': {
        seeds: [
          5, 178, 188, 202, 337, 378, 406, 461, 539, 696, 702, 854, 966, 971,
        ],
        order: 8,
      },
      'F&I Tier 9': {
        seeds: [
          68, 121, 149, 165, 171, 206, 287, 370, 493, 499, 516, 637, 655, 656,
          672, 706, 766, 817, 922, 959, 997,
        ],
        order: 9,
      },
      'F&I Tier 10': {
        seeds: [
          28, 156, 177, 238, 402, 545, 546, 553, 559, 589, 591, 725, 764, 791,
          810, 844, 858, 868, 972, 977,
        ],
        order: 10,
      },
      'Max Fake': {
        seeds: [
          9, 27, 90, 110, 125, 183, 195, 203, 232, 254, 329, 351, 372, 397, 404,
          441, 448, 459, 473, 483, 537, 561, 590, 626, 632, 647, 710, 727, 753,
          756, 785, 805, 809, 818, 869, 909, 930, 941, 962, 976, 980, 989,
        ],
        order: 11,
      },
      FFI: {
        seeds: [
          60, 62, 71, 98, 148, 170, 196, 216, 222, 234, 266, 304, 307, 309, 315,
          321, 328, 333, 364, 368, 400, 411, 413, 415, 438, 445, 463, 485, 489,
          496, 506, 535, 570, 582, 593, 605, 630, 663, 667, 670, 674, 691, 717,
          723, 746, 794, 822, 845, 846, 931, 948, 958,
        ],
        order: 12,
      },
    },
    [PAINT_IDS.DOPPLER_PHASE_1]: {
      'Fake Black Pearl - Max': {
        seeds: [
          630, 31, 49, 88, 98, 106, 113, 135, 190, 196, 217, 218, 220, 226, 253,
          262, 296, 311, 354, 384, 387, 409, 445, 530, 540, 547, 552, 574, 594,
          606, 610, 717, 730, 746, 783, 812, 858, 939, 972, 989, 998,
        ],
        order: 1,
      },
      'Fake Black Pearl - 2': {
        seeds: [
          20, 60, 66, 77, 110, 119, 125, 127, 160, 184, 194, 202, 230, 243, 287,
          369, 370, 404, 419, 423, 432, 444, 469, 570, 589, 600, 627, 632, 661,
          667, 678, 680, 694, 723, 776, 785, 795, 803, 817, 853, 857, 861, 865,
          868, 899, 907, 913, 922, 928, 935, 949, 982,
        ],
        order: 2,
      },
      'Fake Black Pearl - 3': {
        seeds: [
          4, 7, 39, 58, 102, 151, 153, 162, 193, 203, 204, 222, 246, 250, 269,
          286, 303, 325, 328, 334, 360, 373, 388, 394, 411, 412, 425, 436, 450,
          464, 477, 480, 489, 492, 504, 507, 526, 551, 554, 555, 560, 579, 593,
          598, 607, 621, 646, 659, 670, 683, 696, 706, 711, 716, 733, 756, 764,
          766, 777, 787, 818, 844, 871, 874, 893, 894, 896, 908, 954, 962, 983,
          992,
        ],
        order: 3,
      },
      'Fake Black Pearl - 4': {
        seeds: [
          0, 1, 3, 24, 28, 42, 44, 45, 59, 71, 72, 96, 116, 132, 138, 143, 146,
          166, 174, 178, 185, 189, 209, 231, 234, 258, 259, 265, 280, 284, 290,
          292, 374, 383, 410, 443, 463, 472, 478, 479, 484, 490, 498, 502, 506,
          510, 522, 529, 531, 532, 534, 580, 595, 603, 605, 616, 626, 637, 660,
          684, 693, 699, 705, 725, 744, 750, 767, 770, 773, 822, 839, 843, 846,
          855, 859, 890, 929, 951, 958, 969, 973, 980,
        ],
        order: 4,
      },
      'Fake Black Pearl - BTA': {
        seeds: [
          5, 13, 27, 75, 112, 134, 142, 148, 164, 216, 235, 237, 248, 279, 307,
          309, 310, 315, 321, 335, 337, 339, 349, 352, 355, 364, 371, 372, 385,
          406, 408, 415, 434, 451, 456, 515, 569, 624, 638, 642, 650, 681, 689,
          715, 720, 772, 791, 816, 820, 852, 883, 919, 941, 966,
        ],
        order: 5,
      },
    },
    [PAINT_IDS.DOPPLER_PHASE_2]: {
      'Max Pink - Tier 1': {
        seeds: [350, 748, 623, 239, 495, 682, 987, 565],
        order: 1,
      },
      'Max Pink - Tier 2': {
        seeds: [
          474, 938, 19, 501, 505, 56, 101, 192, 214, 707, 877, 585, 635, 986,
        ],
        order: 2,
      },
      'Max Pink - Tier 3': {
        seeds: [
          15, 159, 261, 603, 644, 833, 35, 200, 258, 355, 581, 620, 671, 927,
          964, 973, 439, 618, 741, 199, 343, 629, 870, 967, 144,
        ],
        order: 3,
      },
      'Max Pink - Tier 4': {
        seeds: [
          25, 317, 889, 349, 443, 616, 13, 410, 451, 750, 174, 207, 434, 479,
          544, 625, 847, 301, 617, 676, 947, 65, 641, 36, 219, 306, 371, 512,
          225, 549, 562, 716, 245, 920, 970, 346, 379, 503, 532, 654, 945, 264,
          330, 394, 760, 814, 86, 134, 367, 738, 843, 305, 316, 492, 504, 560,
          757, 45, 55, 118, 148, 185, 415, 584, 634, 645, 713, 903,
        ],
        order: 4,
      },
    },
  },
  [SKINS_IDS.M9_BAYONET]: {
    [PAINT_IDS.MARBLE_FADE]: {
      'Max Red Tip': {
        seeds: [
          892, 34, 41, 87, 93, 205, 256, 326, 34, 348, 403, 468, 520, 527, 575,
          583, 601, 636, 648, 668, 714, 742, 763, 807, 834, 897, 892, 910, 911,
          943, 944, 961, 975,
        ],
        order: 1,
      },
      'Orange Tip': {
        seeds: [
          550, 107, 147, 201, 380, 399, 422, 517, 550, 571, 577, 745, 747, 800,
          824, 825, 856, 936, 981,
        ],
        order: 2,
      },
      'Orange Fake Red Tip - Tier 1': {
        seeds: [
          313, 29, 46, 84, 150, 224, 236, 278, 313, 314, 395, 401, 465, 486,
          514, 599, 657, 690, 751, 781, 789, 827, 840, 849, 956, 968,
        ],
        order: 3,
      },
      'Orange Fake Red Tip - Tier 2': {
        seeds: [
          141, 64, 80, 136, 137, 141, 172, 173, 223, 435, 447, 455, 462, 482,
          572, 597, 608, 640, 712, 726, 813, 838,
        ],
        order: 4,
      },
      'Orange Fake Red Tip - BTA': {
        seeds: [
          21, 30, 73, 89, 94, 130, 145, 211, 260, 282, 377, 381, 466, 511, 536,
          566, 568, 665, 677, 759, 762, 798,
        ],
        order: 5,
      },
    },
    [PAINT_IDS.DOPPLER_PHASE_1]: {
      'Max Pink Tip - Tier 1': {
        seeds: [
          815, 18, 23, 79, 104, 117, 118, 157, 176, 179, 187, 277, 289, 298,
          299, 323, 376, 389, 392, 416, 446, 528, 584, 645, 658, 740, 752, 757,
          758, 760, 769, 774, 806, 808, 815, 821, 835, 851, 866, 886, 895, 921,
          933, 955, 974, 984, 990, 991, 993, 995,
        ],
        order: 1,
      },
      'Max Pink Tip - Tier 2': {
        seeds: [
          324, 6, 12, 22, 33, 37, 37, 47, 76, 94, 154, 191, 210, 212, 227, 276,
          285, 293, 302, 324, 336, 361, 392, 424, 433, 433, 442, 446, 458, 487,
          487, 513, 538, 564, 586, 587, 587, 612, 687, 698, 698, 719, 762, 782,
          790, 811, 811, 815, 860, 863, 863, 875, 878, 887, 898, 915, 953, 960,
          979, 979, 161, 442,
        ],
        order: 2,
      },
      'Max Pink Tip - Tier 3': {
        seeds: [
          525, 21, 30, 43, 64, 73, 80, 103, 109, 130, 145, 155, 172, 173, 181,
          211, 223, 229, 249, 260, 282, 283, 295, 313, 314, 358, 377, 381, 429,
          435, 440, 447, 462, 466, 481, 482, 488, 508, 511, 514, 525, 536, 566,
          568, 572, 597, 608, 640, 665, 677, 686, 726, 759, 813, 881, 891, 917,
          940, 956,
        ],
        order: 3,
      },
      'Max Pink Tip - Tier 4': {
        seeds: [
          754, 11, 29, 46, 84, 89, 107, 136, 137, 141, 147, 150, 168, 224, 236,
          278, 308, 345, 375, 395, 396, 399, 401, 428, 430, 455, 465, 486, 599,
          639, 657, 690, 703, 712, 745, 747, 749, 751, 754, 781, 789, 793, 798,
          800, 824, 825, 827, 838, 840, 849, 856, 872, 914, 936, 956, 968, 981,
        ],
        order: 4,
      },
      'Max Pink Tip - BTA': {
        seeds: [
          34, 41, 87, 93, 105, 201, 205, 256, 326, 341, 348, 380, 403, 422, 449,
          468, 494, 517, 520, 521, 527, 550, 571, 575, 576, 577, 583, 601, 636,
          648, 651, 664, 668, 714, 742, 763, 807, 834, 848, 892, 897, 910, 911,
          925, 943, 944, 961, 975,
        ],
        order: 5,
      },
    },
    [PAINT_IDS.DOPPLER_PHASE_4]: {
      'Max Blue - Tier 1': {
        seeds: [
          763, 575, 897, 636, 341, 93, 403, 910, 468, 326, 961, 520, 87, 911,
          521, 651, 41, 348, 527, 601, 714, 807, 205, 892, 742, 668, 583, 944,
          576, 34, 256, 848, 975, 648, 422, 834, 105, 550, 943, 925, 664, 517,
          571, 380, 449, 494, 577,
        ],
        order: 1,
      },
      'Max Blue - Tier 2': {
        seeds: [
          201, 747, 825, 981, 824, 399, 936, 800, 107, 428, 147, 745, 872, 396,
          793, 856, 754, 150, 914, 639, 345, 486, 278, 956, 827, 29, 751, 690,
          375, 224, 968, 395, 84, 840, 781, 849, 46, 599, 789, 236, 657, 465,
          11, 141, 401, 137, 838, 308, 703, 455, 712, 136, 597, 917, 313, 482,
        ],
        order: 2,
      },
      'Max Blue - Tier 3': {
        seeds: [
          726, 80, 358, 314, 608, 181, 435, 229, 881, 640, 572, 813, 462, 447,
          172, 223, 173, 64, 891, 43, 130, 759, 249, 145, 566, 466, 940, 665,
          514, 511, 283, 381, 21, 282, 211, 686, 536, 488, 508, 568, 677, 377,
          260, 73, 30, 295, 525, 798, 168, 430, 89, 749, 458, 915, 76, 302, 440,
          564, 887, 481, 12, 33, 970, 103, 109, 155, 429, 440, 481, 458, 915,
          76, 302, 564, 887, 12, 33, 790, 94, 6, 960, 762, 210,
        ],
        order: 3,
      },
      'Max Blue - Tier 4': {
        seeds: [
          586, 513, 212, 424, 719, 191, 285, 612, 227, 538, 875, 47, 687, 361,
          898, 276, 336, 782, 953, 154, 324, 860, 293, 878, 161442, 815, 698,
          433, 587, 979, 22, 863, 37, 487, 811, 446, 392, 442, 815, 698, 433,
          587, 979, 22, 863, 37, 487, 811, 446, 392, 416, 752, 758, 104, 774,
          157, 993, 933, 895, 740, 389, 808, 79, 289, 757, 769, 176, 955, 528,
        ],
        order: 4,
      },
      'Max Blue - BTA': {
        seeds: [
          645, 179, 990, 886, 821, 117, 835, 984, 376, 658, 995, 974, 23, 187,
          277, 851, 18, 866, 111, 596, 382, 299, 921, 916, 697, 421, 802, 273,
          666, 942, 431, 902, 57, 312, 342, 806, 901, 884, 737, 760, 804, 63,
          163, 323, 633, 588, 78, 549, 885, 924, 864, 592, 920, 453, 946,
        ],
        order: 5,
      },
    },
    [PAINT_IDS.DOPPLER_PHASE_2]: {
      'Max Pink - Tier 1': {
        seeds: [
          412, 16, 48, 126, 129, 146, 152, 182, 204, 230, 241, 252, 281, 292,
          332, 344, 359, 393, 412, 457, 522, 541, 578, 602, 607, 628, 649, 652,
          660, 673, 685, 688, 701, 705, 736, 743, 777, 780, 787, 792, 832, 874,
          908, 918, 923, 988, 994,
        ],
        order: 1,
      },
      'Max Pink - Tier 2': {
        seeds: [
          621, 5, 8, 14, 32, 58, 108, 112, 171, 178, 188, 202, 206, 213, 233,
          243, 274, 337, 340, 356, 378, 405, 406, 444, 452, 454, 461, 471, 493,
          539, 614, 621, 631, 653, 683, 696, 702, 728, 732, 761, 770, 773, 795,
          803, 826, 854, 867, 873, 876, 922, 949, 966, 971, 982, 997,
        ],
        order: 2,
      },
      'Max Pink - Tier 3': {
        seeds: [
          156, 9, 27, 60, 62, 71, 90, 110, 121, 125, 149, 156, 165, 170, 177,
          183, 195, 196, 203, 216, 222, 232, 234, 238, 254, 266, 287, 304, 307,
          309, 315, 321, 328, 329, 333, 351, 364, 368, 370, 372, 397, 400, 402,
          404, 413, 415, 438, 441, 445, 448, 459, 463, 473, 483, 485, 496, 499,
          506, 516, 535, 537, 545, 546, 553, 559, 561, 582, 589, 590, 591, 605,
          626, 632, 637, 647, 655, 656, 663, 672, 674, 691, 706, 710, 717, 725,
          727, 746, 753, 756, 764, 766, 785, 791, 794, 805, 809, 810, 817, 818,
          844, 858, 868, 869, 909, 930, 931, 941, 948, 958, 962, 972, 976, 977,
          980, 989,
        ],
        order: 3,
      },
      'Max Pink - BTA': {
        seeds: [
          0, 1, 3, 4, 42, 45, 54, 96, 98, 102, 138, 142, 143, 148, 151, 162,
          164, 185, 217, 246, 253, 258, 262, 269, 280, 296, 310, 311, 334, 335,
          353, 354, 384, 385, 387, 411, 436, 451, 479, 489, 507, 515, 530, 532,
          540, 547, 552, 555, 569, 570, 579, 580, 593, 598, 606, 611, 624, 630,
          642, 667, 670, 678, 689, 693, 709, 716, 723, 733, 767, 776, 783, 812,
          822, 845, 846, 853, 894, 899, 907, 929, 939,
        ],
        order: 4,
      },
    },
    [PAINT_IDS.GAMMA_DOPPLER_PHASE_3]: {
      'Diamond Tip - Tier 1': {
        seeds: [
          412, 16, 48, 126, 129, 146, 152, 182, 204, 230, 241, 252, 281, 292,
          332, 344, 359, 393, 412, 452, 457, 522, 541, 578, 602, 607, 628, 631,
          649, 652, 660, 673, 685, 688, 701, 705, 736, 743, 773, 777, 780, 787,
          792, 832, 874, 908, 918, 923, 982, 988, 994,
        ],
        order: 1,
      },
      'Diamond Tip - Tier 2': {
        seeds: [
          621, 5, 8, 14, 32, 58, 68, 108, 112, 171, 178, 188, 202, 206, 213,
          233, 243, 274, 337, 340, 356, 378, 405, 406, 444, 454, 461, 471, 493,
          539, 614, 621, 653, 683, 696, 702, 728, 732, 761, 770, 795, 803, 826,
          854, 867, 873, 876, 922, 949, 959, 966, 971, 997,
        ],
        order: 2,
      },
      'Diamond Tip - Tier 3': {
        seeds: [
          156, 90, 121, 149, 156, 165, 177, 232, 238, 287, 329, 351, 370, 372,
          402, 441, 499, 516, 545, 546, 553, 559, 589, 591, 632, 637, 655, 656,
          672, 706, 725, 727, 753, 756, 764, 766, 791, 809, 810, 817, 844, 858,
          868, 941, 972, 976, 977,
        ],
        order: 3,
      },
      'Diamond Tip - BTA': {
        seeds: [
          9, 27, 60, 62, 71, 110, 125, 170, 183, 195, 196, 203, 216, 222, 234,
          254, 266, 304, 307, 309, 315, 321, 328, 333, 364, 368, 397, 400, 404,
          413, 415, 438, 445, 448, 459, 463, 473, 483, 485, 496, 506, 535, 537,
          561, 582, 590, 605, 626, 647, 663, 674, 691, 710, 717, 746, 785, 794,
          805, 818, 869, 909, 930, 931, 948, 958, 962, 980, 989,
        ],
        order: 4,
      },
    },
  },
};

const PATTERN_STYLES = {
  [PAINT_IDS.MARBLE_FADE]: {
    'F&I Tier 1': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #cc0000, #0000cc)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'F&I Tier 2': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #d41a1a, #1a1ad4)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'F&I Tier 3': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #dc3333, #3333dc)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'F&I Tier 4': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e44d4d, #4d4de4)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'F&I Tier 5': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #ec6666, #6666ec)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'F&I Tier 6': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #f48080, #8080f4)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'F&I Tier 7': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #f99999, #9999f9)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'F&I Tier 8': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #ffb3b3, #b3b3ff)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'F&I Tier 9': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #ffcccc, #ccccff)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'F&I Tier 10': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #ffe6e6, #e6e6ff)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Fake': {
      color: '#FFFFFF',
      bgColor: '#800080',
      fontSize: '1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    FFI: {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #ff6b3a, #3a7bff)',
      fontSize: '1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
  },
  [PAINT_IDS.DOPPLER_PHASE_1]: {
    'Fake Black Pearl - Max': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #000000, #12062c)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Fake Black Pearl - 2': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #080215, #1c0940)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Fake Black Pearl - 3': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #0f0328, #250d54)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Fake Black Pearl - 4': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #170540, #2f1068)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Fake Black Pearl - BTA': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #1f0652, #38147d)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Pink Tip - Tier 1': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e6007d, #cc0066)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Pink Tip - Tier 2': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e61c89, #cc1a73)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Pink Tip - Tier 3': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e63894, #cc3380)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Pink Tip - Tier 4': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e6549f, #cc4c8c)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Pink Tip - BTA': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e670aa, #cc6699)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
  },
  [PAINT_IDS.DOPPLER_PHASE_2]: {
    'Max Pink - Tier 1': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e6007d, #cc0066)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Pink - Tier 2': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e61c89, #cc1a73)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Pink - Tier 3': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e63894, #cc3380)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Pink - Tier 4': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e6549f, #cc4c8c)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Pink - BTA': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #e670aa, #cc6699)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
  },
  [PAINT_IDS.GAMMA_DOPPLER_PHASE_1]: {
    'Diamond Gem - Tier 1': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #00416a, #00703d)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Diamond Gem - Tier 2': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #005384, #008c4d)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Diamond Gem - Tier 3': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #00659e, #00a85c)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Diamond Gem - BTA': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #0077b8, #00c46c)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
  },
  [PAINT_IDS.GAMMA_DOPPLER_PHASE_3]: {
    'Diamond Tip - Tier 1': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #009acc, #00cc00)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Diamond Tip - Tier 2': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #19a4d1, #19d119)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Diamond Tip - Tier 3': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #33aed6, #33d633)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Diamond Tip - BTA': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #4db8db, #4ddb4d)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
  },
  [PAINT_IDS.DOPPLER_PHASE_4]: {
    'Max Blue - Tier 1': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #0044cc, #0000cc)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Blue - Tier 2': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #1a53d1, #1a1acc)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Blue - Tier 3': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #3366d6, #3333cc)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Blue - Tier 4': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #4d77db, #4d4dcc)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
    'Max Blue - BTA': {
      color: '#FFFFFF',
      bgColor: 'linear-gradient(to right, #6688e0, #6666cc)',
      fontSize: '1.1em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      fontWeight: 'bold',
    },
  },
};

(function () {
  window.CS2_PATTERN_DATABASE = PATTERN_DATABASE;
  window.CS2_PATTERN_STYLES = PATTERN_STYLES;
})();
