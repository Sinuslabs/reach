namespace Paths
{
		reg svgData;
		const icons = {};
		
		
		// Small Logo
		svgData = [110, 109, 239, 201, 107, 64, 88, 255, 178, 64, 108, 146, 150, 162, 64, 117, 205, 201, 64, 98, 208, 208, 170, 64, 24, 120, 205, 64, 177, 196, 179, 64, 33, 31, 207, 64, 27, 187, 188, 64, 123, 160, 206, 64, 98, 217, 177, 197, 64, 150, 33, 206, 64, 165, 107, 206, 64, 241, 128, 203, 64, 210, 53, 214, 64, 161, 243, 198, 64, 108, 88, 57, 0, 65, 239, 230, 170, 64, 98, 171, 219, 3, 65, 224, 132, 165, 64, 198, 208, 6, 65, 105, 116, 158, 64, 196, 218, 8, 65, 98, 74, 150, 64, 98, 226, 228, 10, 65, 29, 32, 142, 64, 241, 244, 11, 65, 240, 22, 133, 64, 167, 244, 11, 65, 127, 217, 119, 64, 108, 136, 157, 10, 65, 21, 0, 17, 64, 98, 92, 32, 10, 65, 26, 163, 253, 63, 242, 152, 8, 65, 174, 182, 218, 63, 244, 38, 6, 65, 23, 14, 188, 63, 98, 215, 180, 3, 65, 128, 101, 157, 63, 205, 105, 0, 65, 249, 218, 131, 63, 174, 18, 249, 64, 189, 252, 98, 63, 108, 191, 96, 204, 64, 199, 245, 31, 62, 98, 237, 42, 196, 64, 33, 235, 36, 61, 13, 55, 187, 64, 78, 44, 75, 188, 41, 63, 178, 64, 143, 21, 33, 59, 98, 132, 71, 169, 64, 85, 219, 141, 60, 193, 139, 160, 64, 45, 78, 203, 61, 127, 193, 152, 64, 72, 135, 119, 62, 108, 103, 10, 93, 64, 205, 35, 143, 63, 98, 211, 135, 78, 64, 203, 185, 164, 63, 212, 183, 66, 64, 160, 253, 192, 63, 214, 144, 58, 64, 106, 164, 225, 63, 98, 47, 105, 50, 64, 242, 36, 1, 64, 137, 36, 46, 64, 5, 52, 19, 64, 4, 28, 46, 64, 68, 134, 37, 64, 108, 255, 120, 51, 64, 236, 47, 134, 64, 98, 126, 53, 53, 64, 228, 102, 143, 64, 239, 56, 59, 64, 11, 70, 152, 64, 218, 3, 69, 64, 182, 16, 160, 64, 98, 196, 206, 78, 64, 245, 219, 167, 64, 143, 25, 92, 64, 75, 89, 174, 64, 239, 201, 107, 64, 88, 255, 178, 64, 99, 109, 85, 193, 65, 65, 62, 150, 245, 64, 108, 115, 104, 43, 65, 122, 54, 222, 64, 98, 211, 77, 39, 65, 214, 139, 218, 64, 57, 214, 34, 65, 33, 229, 216, 64, 37, 93, 30, 65, 6, 100, 217, 64, 98, 27, 228, 25, 65, 151, 226, 217, 64, 181, 137, 21, 65, 144, 131, 220, 64, 233, 166, 17, 65, 14, 16, 225, 64, 108, 216, 158, 248, 64, 172, 28, 253, 64, 98, 132, 100, 241, 64, 114, 68, 1, 65, 132, 129, 235, 64, 148, 205, 4, 65, 110, 110, 231, 64, 177, 225, 8, 65, 98, 171, 91, 227, 64, 163, 245, 12, 65, 43, 53, 225, 64, 165, 119, 17, 65, 250, 39, 225, 64, 141, 11, 22, 65, 108, 203, 214, 227, 64, 190, 193, 47, 65, 98, 36, 209, 228, 64, 211, 77, 52, 65, 164, 223, 231, 64, 54, 171, 56, 65, 160, 195, 236, 64, 52, 128, 60, 65, 98, 47, 168, 241, 64, 50, 85, 64, 65, 87, 62, 248, 64, 194, 134, 67, 65, 239, 254, 255, 64, 32, 210, 69, 65, 108, 100, 88, 22, 65, 239, 56, 81, 65, 98, 2, 113, 26, 65, 169, 19, 83, 65, 115, 232, 30, 65, 133, 235, 83, 65, 78, 98, 35, 65, 230, 174, 83, 65, 98, 245, 219, 39, 65, 222, 113, 83, 65, 76, 55, 44, 65, 255, 33, 82, 65, 206, 25, 48, 65, 186, 218, 79, 65, 108, 116, 70, 69, 65, 149, 212, 65, 65, 98, 38, 228, 72, 65, 113, 27, 63, 65, 103, 213, 75, 65, 197, 143, 59, 65, 211, 222, 77, 65, 62, 121, 55, 65, 98, 62, 232, 79, 65, 183, 98, 51, 65, 22, 251, 80, 65, 211, 222, 46, 65, 163, 1, 81, 65, 128, 72, 42, 65, 108, 101, 170, 79, 65, 4, 161, 16, 65, 98, 82, 39, 79, 65, 53, 36, 12, 65, 98, 161, 77, 65, 218, 213, 7, 65, 181, 55, 75, 65, 63, 12, 4, 65, 98, 7, 206, 72, 65, 112, 66, 0, 65, 0, 145, 69, 65, 131, 47, 250, 64, 85, 193, 65, 65, 62, 150, 245, 64, 99, 109, 23, 89, 131, 65, 251, 58, 103, 65, 108, 75, 89, 112, 65, 195, 211, 91, 65, 98, 66, 62, 108, 65, 9, 249, 89, 65, 156, 196, 103, 65, 45, 33, 89, 65, 128, 72, 99, 65, 53, 94, 89, 65, 98, 205, 204, 94, 65, 212, 154, 89, 65, 0, 111, 90, 65, 179, 234, 90, 65, 160, 137, 86, 65, 97, 50, 93, 65, 108, 186, 107, 65, 65, 134, 56, 107, 65, 98, 100, 204, 61, 65, 192, 236, 109, 65, 127, 217, 58, 65, 142, 117, 113, 65, 20, 208, 56, 65, 9, 138, 117, 65, 98, 63, 198, 54, 65, 132, 158, 121, 65, 57, 180, 53, 65, 150, 33, 126, 65, 33, 176, 53, 65, 186, 90, 129, 65, 108, 95, 7, 55, 65, 17, 54, 142, 65, 98, 46, 144, 55, 65, 124, 114, 144, 65, 55, 26, 57, 65, 36, 151, 146, 65, 89, 134, 59, 65, 62, 121, 148, 65, 98, 124, 242, 61, 65, 140, 91, 150, 65, 236, 47, 65, 65, 99, 238, 151, 65, 197, 254, 68, 65, 111, 18, 153, 65, 108, 168, 87, 91, 65, 214, 197, 158, 65, 98, 188, 116, 95, 65, 138, 176, 159, 65, 204, 238, 99, 65, 55, 26, 160, 65, 22, 106, 104, 65, 120, 250, 159, 65, 98, 96, 229, 108, 65, 238, 218, 159, 65, 91, 66, 113, 65, 150, 50, 159, 65, 82, 39, 117, 65, 92, 15, 158, 65, 108, 252, 41, 133, 65, 74, 12, 151, 65, 98, 9, 249, 134, 65, 249, 177, 149, 65, 170, 113, 136, 65, 145, 237, 147, 65, 37, 117, 137, 65, 32, 227, 145, 65, 98, 213, 120, 138, 65, 174, 216, 143, 65, 52, 0, 139, 65, 89, 151, 141, 65, 157, 0, 139, 65, 159, 77, 139, 65, 108, 75, 106, 138, 65, 180, 89, 125, 65, 98, 165, 44, 138, 65, 134, 201, 120, 65, 167, 104, 137, 65, 10, 104, 116, 65, 20, 46, 136, 65, 197, 143, 112, 65, 98, 235, 243, 134, 65, 233, 183, 108, 65, 251, 75, 133, 65, 31, 133, 105, 65, 23, 89, 131, 65, 251, 58, 103, 65, 99, 109, 176, 27, 196, 64, 66, 96, 39, 65, 108, 17, 252, 193, 64, 110, 93, 19, 65, 98, 66, 9, 194, 64, 165, 201, 14, 65, 131, 47, 196, 64, 164, 71, 10, 65, 133, 66, 200, 64, 167, 51, 6, 65, 98, 155, 85, 204, 64, 149, 31, 2, 65, 71, 56, 210, 64, 145, 44, 253, 64, 239, 114, 217, 64, 173, 192, 247, 64, 108, 71, 230, 21, 65, 230, 34, 193, 64, 98, 233, 200, 25, 65, 20, 150, 188, 64, 110, 35, 30, 65, 48, 245, 185, 64, 120, 156, 34, 65, 138, 118, 185, 64, 98, 181, 21, 39, 65, 249, 247, 184, 64, 231, 140, 43, 65, 174, 158, 186, 64, 135, 167, 47, 65, 254, 72, 190, 64, 108, 202, 50, 65, 65, 85, 135, 208, 64, 98, 211, 77, 69, 65, 8, 61, 212, 64, 122, 199, 73, 65, 255, 236, 213, 64, 45, 67, 78, 65, 25, 115, 213, 64, 98, 72, 191, 82, 65, 156, 249, 212, 64, 21, 29, 87, 65, 222, 89, 210, 64, 12, 2, 91, 65, 193, 202, 205, 64, 108, 92, 32, 112, 65, 228, 160, 177, 64, 98, 131, 192, 115, 65, 193, 57, 172, 64, 104, 179, 118, 65, 162, 40, 165, 64, 60, 189, 120, 65, 67, 255, 156, 64, 98, 17, 199, 122, 65, 36, 214, 148, 64, 174, 216, 123, 65, 171, 207, 139, 64, 245, 219, 123, 65, 181, 166, 130, 64, 108, 182, 132, 122, 65, 125, 174, 30, 64, 98, 213, 9, 122, 65, 79, 117, 12, 64, 18, 131, 120, 65, 67, 231, 245, 63, 52, 17, 118, 65, 179, 41, 215, 63, 98, 237, 158, 115, 65, 211, 106, 184, 63, 189, 82, 112, 65, 238, 206, 158, 63, 164, 112, 108, 65, 144, 102, 140, 63, 108, 194, 23, 86, 65, 2, 155, 187, 62, 98, 173, 250, 81, 65, 170, 243, 128, 62, 157, 128, 77, 65, 146, 8, 77, 62, 83, 5, 73, 65, 93, 222, 92, 62, 98, 9, 138, 68, 65, 108, 180, 108, 62, 14, 45, 64, 65, 106, 103, 160, 62, 23, 72, 60, 65, 231, 54, 233, 62, 108, 23, 183, 38, 65, 172, 173, 168, 63, 98, 101, 25, 35, 65, 114, 80, 190, 63, 36, 40, 32, 65, 217, 153, 218, 63, 207, 32, 30, 65, 167, 63, 251, 63, 98, 122, 25, 28, 65, 145, 242, 13, 64, 145, 10, 27, 65, 139, 253, 31, 64, 30, 10, 27, 65, 52, 75, 50, 64, 108, 162, 11, 28, 65, 44, 43, 129, 64, 98, 47, 11, 28, 65, 105, 82, 138, 64, 38, 252, 26, 65, 168, 87, 147, 64, 199, 244, 24, 65, 6, 129, 155, 64, 98, 114, 237, 22, 65, 122, 170, 163, 64, 101, 252, 19, 65, 18, 189, 170, 64, 85, 94, 16, 65, 91, 37, 176, 64, 108, 94, 99, 206, 64, 118, 195, 230, 64, 98, 221, 152, 198, 64, 84, 82, 235, 64, 173, 221, 189, 64, 19, 242, 237, 64, 180, 229, 180, 64, 227, 107, 238, 64, 98, 145, 237, 171, 64, 117, 229, 238, 64, 5, 250, 162, 64, 189, 53, 237, 64, 223, 195, 154, 64, 204, 127, 233, 64, 108, 87, 149, 111, 64, 179, 94, 215, 64, 98, 53, 41, 95, 64, 0, 169, 211, 64, 70, 66, 77, 64, 93, 249, 209, 64, 0, 82, 59, 64, 46, 115, 210, 64, 98, 99, 98, 41, 64, 255, 236, 210, 64, 133, 235, 23, 64, 42, 140, 213, 64, 214, 86, 8, 64, 72, 27, 218, 64, 108, 125, 119, 79, 63, 250, 39, 246, 64, 98, 43, 109, 21, 63, 143, 141, 251, 64, 146, 94, 204, 62, 45, 79, 1, 65, 41, 34, 139, 62, 6, 100, 5, 65, 98, 62, 203, 19, 62, 223, 120, 9, 65, 154, 18, 159, 61, 143, 252, 13, 65, 251, 255, 157, 61, 10, 145, 18, 65, 108, 20, 208, 36, 62, 69, 71, 44, 65, 98, 220, 70, 67, 62, 57, 214, 48, 65, 27, 100, 146, 62, 227, 54, 53, 65, 21, 169, 224, 62, 40, 15, 57, 65, 98, 49, 121, 23, 63, 4, 231, 60, 65, 149, 70, 76, 63, 55, 26, 64, 65, 58, 59, 133, 63, 102, 102, 66, 65, 108, 80, 1, 28, 64, 54, 205, 77, 65, 98, 251, 116, 44, 64, 156, 162, 79, 65, 146, 92, 62, 64, 247, 117, 80, 65, 228, 73, 80, 64, 227, 54, 80, 65, 98, 55, 55, 98, 64, 102, 247, 79, 65, 34, 171, 115, 64, 30, 167, 78, 65, 18, 160, 129, 64, 66, 96, 76, 65, 108, 93, 220, 171, 64, 29, 90, 62, 65, 98, 142, 30, 179, 64, 119, 190, 59, 65, 72, 22, 185, 64, 223, 79, 56, 65, 199, 75, 189, 64, 189, 82, 52, 65, 98, 69, 129, 193, 64, 4, 86, 48, 65, 57, 214, 195, 64, 4, 231, 43, 65, 176, 27, 196, 64, 66, 96, 39, 65, 99, 109, 79, 158, 159, 65, 145, 27, 20, 65, 98, 158, 94, 159, 65, 128, 142, 15, 65, 107, 154, 158, 65, 236, 47, 11, 65, 177, 97, 157, 65, 195, 88, 7, 65, 98, 193, 40, 156, 65, 184, 129, 3, 65, 176, 131, 154, 65, 43, 77, 0, 65, 18, 148, 152, 65, 156, 249, 251, 64, 108, 213, 103, 141, 65, 149, 43, 229, 64, 98, 23, 89, 139, 65, 253, 130, 225, 64, 67, 28, 137, 65, 47, 221, 223, 64, 158, 222, 134, 65, 20, 92, 224, 64, 98, 45, 161, 132, 65, 165, 218, 224, 64, 176, 114, 130, 65, 99, 122, 227, 64, 0, 128, 128, 65, 104, 5, 232, 64, 108, 72, 225, 107, 65, 3, 9, 2, 65, 98, 91, 66, 104, 65, 81, 189, 4, 65, 223, 79, 101, 65, 42, 70, 8, 65, 11, 70, 99, 65, 144, 90, 12, 65, 98, 159, 60, 97, 65, 246, 110, 16, 65, 153, 42, 96, 65, 191, 241, 20, 65, 24, 38, 96, 65, 26, 134, 25, 65, 108, 168, 53, 97, 65, 141, 151, 45, 65, 98, 144, 49, 97, 65, 107, 43, 50, 65, 33, 31, 96, 65, 125, 174, 54, 65, 181, 21, 94, 65, 248, 194, 58, 65, 98, 225, 11, 92, 65, 115, 215, 62, 65, 101, 25, 89, 65, 66, 96, 66, 65, 16, 122, 85, 65, 123, 20, 69, 65, 108, 192, 91, 44, 65, 202, 84, 96, 65, 98, 201, 118, 40, 65, 61, 155, 98, 65, 206, 25, 36, 65, 238, 235, 99, 65, 90, 158, 31, 65, 2, 43, 100, 65, 98, 37, 35, 27, 65, 127, 106, 100, 65, 63, 169, 22, 65, 36, 151, 99, 65, 32, 140, 18, 65, 190, 193, 97, 65, 108, 59, 1, 1, 65, 156, 162, 88, 65, 98, 117, 205, 249, 64, 159, 205, 86, 65, 85, 222, 240, 64, 219, 249, 85, 65, 238, 235, 231, 64, 88, 57, 86, 65, 98, 219, 249, 222, 64, 213, 120, 86, 65, 15, 69, 214, 64, 29, 201, 87, 65, 204, 127, 206, 64, 145, 15, 90, 65, 108, 229, 208, 163, 64, 95, 7, 104, 65, 98, 62, 150, 156, 64, 60, 189, 106, 65, 146, 179, 150, 64, 11, 70, 110, 65, 39, 160, 146, 64, 134, 90, 114, 65, 98, 101, 141, 142, 64, 152, 110, 118, 65, 98, 103, 140, 64, 111, 240, 122, 65, 8, 90, 140, 64, 77, 132, 127, 65, 108, 70, 8, 143, 64, 73, 157, 140, 65, 98, 222, 2, 144, 64, 32, 227, 142, 65, 178, 17, 147, 64, 209, 17, 145, 65, 174, 245, 151, 64, 133, 252, 146, 65, 98, 232, 217, 156, 64, 4, 231, 148, 65, 252, 111, 163, 64, 151, 127, 150, 65, 232, 48, 171, 64, 122, 165, 151, 65, 108, 214, 226, 215, 64, 139, 125, 157, 65, 98, 190, 19, 224, 64, 179, 106, 158, 65, 159, 2, 233, 64, 161, 214, 158, 65, 216, 245, 241, 64, 82, 184, 158, 65, 98, 100, 233, 250, 64, 206, 153, 158, 65, 244, 207, 1, 65, 222, 241, 157, 65, 192, 178, 5, 65, 60, 206, 156, 65, 108, 38, 223, 26, 65, 41, 203, 149, 65, 98, 158, 123, 30, 65, 210, 111, 148, 65, 139, 108, 33, 65, 2, 171, 146, 65, 247, 117, 35, 65, 45, 161, 144, 65, 98, 99, 127, 37, 65, 36, 151, 142, 65, 12, 147, 38, 65, 57, 86, 140, 65, 212, 154, 38, 65, 126, 12, 138, 65, 108, 219, 138, 37, 65, 228, 3, 128, 65, 98, 34, 142, 37, 65, 25, 115, 123, 65, 190, 159, 38, 65, 7, 240, 118, 65, 147, 169, 40, 65, 140, 219, 114, 65, 98, 104, 179, 42, 65, 168, 198, 110, 65, 181, 166, 45, 65, 66, 62, 107, 65, 116, 70, 49, 65, 114, 138, 104, 65, 108, 195, 100, 90, 65, 205, 59, 77, 65, 98, 35, 74, 94, 65, 31, 244, 74, 65, 240, 167, 98, 65, 64, 164, 73, 65, 163, 35, 103, 65, 56, 103, 73, 65, 98, 190, 159, 107, 65, 153, 42, 73, 65, 101, 25, 112, 65, 117, 2, 74, 65, 110, 52, 116, 65, 47, 221, 75, 65, 108, 121, 216, 130, 65, 250, 237, 84, 65, 98, 254, 229, 132, 65, 180, 200, 86, 65, 5, 35, 135, 65, 144, 160, 87, 65, 223, 96, 137, 65, 241, 99, 87, 65, 98, 237, 158, 139, 65, 233, 38, 87, 65, 211, 205, 141, 65, 115, 215, 85, 65, 79, 192, 143, 65, 197, 143, 83, 65, 108, 161, 86, 154, 65, 55, 137, 69, 65, 98, 70, 37, 156, 65, 44, 212, 66, 65, 126, 157, 157, 65, 140, 74, 63, 65, 45, 161, 158, 65, 122, 54, 59, 65, 98, 169, 164, 159, 65, 150, 33, 55, 65, 113, 44, 160, 65, 86, 159, 50, 65, 67, 45, 160, 65, 74, 12, 46, 65, 108, 79, 158, 159, 65, 145, 27, 20, 65, 99, 101, 0, 0]; 
		icons.logo = Content.createPath();
		icons.logo.loadFromData(svgData);
		
		// Low Cut Icon
		svgData = [110, 109, 0, 0, 128, 63, 0, 0, 192, 64, 108, 111, 13, 133, 64, 0, 0, 128, 63, 108, 0, 0, 48, 65, 0, 0, 128, 63, 101, 0, 0];
		icons.lowCut = Content.createPath();
		icons.lowCut.loadFromData(svgData);
		
		// High Cut Icon
		svgData = [110, 109, 0, 0, 32, 65, 0, 0, 192, 64, 108, 145, 242, 218, 64, 0, 0, 128, 63, 108, 5, 0, 192, 180, 0, 0, 128, 63, 101, 0, 0];
		icons.highCut = Content.createPath();
		icons.highCut.loadFromData(svgData);
		
		// Character Icon
		svgData = [110, 109, 136, 99, 89, 65, 215, 250, 128, 64, 98, 172, 28, 93, 65, 164, 223, 114, 64, 196, 177, 97, 65, 72, 191, 103, 64, 94, 186, 102, 65, 109, 144, 97, 64, 98, 97, 195, 107, 65, 145, 97, 91, 64, 43, 24, 113, 65, 8, 85, 90, 64, 184, 64, 118, 65, 149, 130, 94, 64, 98, 68, 105, 123, 65, 75, 176, 98, 64, 27, 30, 128, 65, 211, 246, 107, 64, 129, 38, 130, 65, 161, 132, 121, 64, 98, 230, 46, 132, 65, 55, 137, 131, 64, 11, 198, 133, 65, 45, 62, 140, 64, 174, 199, 134, 65, 25, 28, 150, 64, 98, 134, 201, 135, 65, 5, 250, 159, 64, 20, 46, 136, 65, 255, 178, 170, 64, 139, 236, 135, 65, 97, 84, 181, 64, 98, 2, 171, 135, 65, 174, 245, 191, 64, 57, 197, 134, 65, 107, 43, 202, 64, 223, 79, 133, 65, 128, 14, 211, 64, 98, 134, 218, 131, 65, 149, 241, 219, 64, 170, 224, 129, 65, 205, 59, 227, 64, 184, 30, 127, 65, 44, 72, 232, 64, 98, 133, 124, 122, 65, 118, 84, 237, 64, 14, 79, 117, 65, 22, 251, 239, 64, 179, 12, 112, 65, 0, 0, 240, 64, 108, 0, 0, 128, 63, 0, 0, 240, 64, 109, 247, 88, 226, 64, 171, 91, 189, 63, 98, 178, 75, 232, 64, 2, 14, 165, 63, 98, 161, 239, 64, 252, 24, 147, 63, 20, 179, 247, 64, 228, 20, 137, 63, 98, 177, 196, 255, 64, 234, 33, 126, 63, 42, 41, 4, 65, 57, 155, 122, 63, 152, 76, 8, 65, 229, 242, 131, 63, 98, 17, 112, 12, 65, 137, 152, 138, 63, 97, 79, 16, 65, 243, 113, 153, 63, 100, 146, 19, 65, 77, 45, 175, 63, 98, 113, 213, 22, 65, 251, 232, 196, 63, 78, 98, 25, 65, 60, 218, 224, 63, 250, 254, 26, 65, 175, 66, 0, 64, 98, 166, 155, 28, 65, 64, 24, 16, 64, 79, 59, 29, 65, 22, 77, 33, 64, 213, 207, 28, 65, 201, 89, 50, 64, 98, 90, 100, 28, 65, 123, 102, 67, 64, 13, 241, 26, 65, 139, 195, 83, 64, 219, 150, 24, 65, 227, 252, 97, 64, 98, 180, 60, 22, 65, 59, 54, 112, 64, 97, 14, 19, 65, 207, 218, 123, 64, 65, 84, 15, 65, 216, 240, 129, 64, 98, 34, 154, 11, 65, 94, 244, 133, 64, 191, 113, 7, 65, 45, 9, 136, 64, 203, 57, 3, 65, 235, 255, 135, 64, 108, 0, 0, 128, 63, 235, 255, 135, 64, 108, 247, 88, 226, 64, 171, 91, 189, 63, 99, 109, 24, 149, 23, 65, 97, 84, 88, 65, 98, 117, 142, 26, 65, 53, 94, 91, 65, 78, 57, 30, 65, 224, 156, 93, 65, 242, 65, 34, 65, 47, 221, 94, 65, 98, 245, 74, 38, 65, 231, 29, 96, 65, 209, 145, 42, 65, 109, 86, 96, 65, 11, 181, 46, 65, 111, 129, 95, 65, 98, 174, 216, 50, 65, 218, 172, 94, 65, 233, 183, 54, 65, 183, 209, 92, 65, 22, 251, 57, 65, 55, 26, 90, 65, 98, 217, 61, 61, 65, 183, 98, 87, 65, 193, 202, 63, 65, 143, 228, 83, 65, 161, 103, 65, 65, 53, 239, 79, 65, 98, 25, 4, 67, 65, 219, 249, 75, 65, 215, 163, 67, 65, 218, 172, 71, 65, 134, 56, 67, 65, 173, 105, 67, 65, 98, 205, 204, 66, 65, 129, 38, 63, 65, 180, 89, 65, 65, 40, 15, 59, 65, 151, 255, 62, 65, 157, 128, 55, 65, 98, 122, 165, 60, 65, 124, 242, 51, 65, 201, 118, 57, 65, 108, 9, 49, 65, 211, 188, 53, 65, 95, 7, 47, 65, 98, 222, 2, 50, 65, 188, 5, 45, 65, 81, 218, 45, 65, 127, 251, 43, 65, 52, 162, 41, 65, 0, 0, 44, 65, 108, 0, 0, 128, 63, 0, 0, 44, 65, 108, 24, 149, 23, 65, 97, 84, 88, 65, 99, 101, 0, 0];
		icons.character = Content.createPath();
		icons.character.loadFromData(svgData);
		
		// Circular Shape (for knob shadows)
		svgData = [110, 109, 0, 0, 150, 66, 0, 0, 22, 66, 98, 0, 0, 150, 66, 10, 215, 104, 66, 10, 215, 104, 66, 0, 0, 150, 66, 0, 0, 22, 66, 0, 0, 150, 66, 98, 236, 81, 134, 65, 0, 0, 150, 66, 0, 0, 0, 0, 10, 215, 104, 66, 0, 0, 0, 0, 0, 0, 22, 66, 98, 0, 0, 0, 0, 236, 81, 134, 5, 236, 81, 134, 65, 0, 0, 0, 0, 0, 0, 22, 66, 0, 0, 0, 0, 98, 10, 215, 104, 66, 0, 0, 0, 0, 0, 0, 150, 66, 236, 81, 134, 65, 0, 0, 150, 66, 0, 0, 22, 66, 99, 101, 0, 0];
		icons.circular = Content.createPath();
		icons.circular.loadFromData(svgData);
		
		// Right Arrow Icon
		svgData = [110,109,188,203,9,65,2,183,189,64,108,143,170,68,64,51,179,27,65,98,94,75,52,64,8,131,30,65,58,204,35,64,0,0,32,65,30,22,22,64,0,0,32,65,98,187,39,247,63,0,0,32,65,234,91,214,63,164,170,26,65,234,91,214,63,50,189,17,65,108,234,91,214,63,39,216,99,63, 98,234,91,214,63,222,86,170,62,63,29,247,63,216,49,211,50,252,0,22,64,216,49,211,50,98,86,188,35,64,216,49,211,50,249,247,51,64,221,165,190,61,128,96,68,64,67,227,137,62,108,202,195,9,65,1,77,130,64,98,154,119,15,65,142,35,138,64,8,160,18,65,205,175, 148,64,8,160,18,65,176,3,160,64,98,92,160,18,65,134,85,171,64,48,129,15,65,9,225,181,64,188,203,9,65,2,183,189,64,99,101,0,0];
		icons.rightArrow = Content.createPath();
		icons.rightArrow.loadFromData(svgData);
		
		// Left Arrow Icon
		svgData = [110,109,24,125,17,64,254,72,130,64,108,168,0,250,64,242,152,137,62,98,43,24,1,65,75,123,190,61,233,55,5,65,0,0,0,0,122,165,8,65,0,0,0,0,98,11,70,15,65,0,0,0,0,133,95,19,65,172,171,170,62,133,95,19,65,6,45,100,63,108,133,95,19,65,122,194,17,65,98,133, 95,19,65,77,173,26,65,90,71,15,65,0,0,32,65,195,170,8,65,0,0,32,65,98,226,59,5,65,0,0,32,65,4,45,1,65,180,130,30,65,196,37,250,64,232,176,27,65,108,224,156,17,64,255,178,189,64,98,61,155,245,63,114,220,181,64,209,87,220,63,51,80,171,64,209,87,220,63, 80,252,159,64,98,50,85,220,63,122,170,148,64,144,78,245,63,247,30,138,64,24,125,17,64,254,72,130,64,99,101,0,0];
		icons.leftArrow = Content.createPath();
		icons.leftArrow.loadFromData(svgData);
		
		// Link Icon 
		svgData = [110,109,31,133,140,65,83,179,183,63,98,97,84,133,65,63,31,9,63,31,133,118,65,206,176,44,60,119,45,98,65,114,247,28,57,98,106,77,77,65,7,201,39,188,118,224,56,65,110,82,5,63,27,13,42,65,83,179,183,63,108,226,216,4,65,159,176,112,64,98,29,32,10,65,192, 38,109,64,183,127,15,65,126,82,107,64,255,236,20,65,126,82,107,64,98,37,134,31,65,126,82,107,64,43,246,41,65,189,53,114,64,195,245,51,65,72,191,127,64,98,150,178,54,65,224,185,129,64,158,94,57,65,229,208,131,64,34,253,59,65,163,30,134,64,108,157,17,73, 65,49,235,87,64,98,61,44,79,65,214,110,63,64,18,165,87,65,85,193,48,64,69,71,96,65,15,127,47,64,98,146,203,105,65,106,24,46,64,199,75,115,65,122,252,60,64,95,7,122,65,49,235,87,64,98,45,195,131,65,127,246,134,64,45,195,131,65,76,224,178,64,95,7,122,65, 51,225,205,64,108,97,50,95,65,91,194,1,65,108,231,140,51,65,68,105,45,65,98,52,17,43,65,96,229,53,65,17,42,30,65,198,109,57,65,244,137,18,65,213,120,54,65,98,88,103,8,65,247,228,51,65,150,62,255,64,247,117,44,65,41,208,246,64,189,227,34,65,98,208,208, 245,64,190,193,33,65,229,242,244,64,49,153,32,65,101,54,244,64,179,106,31,65,108,208,68,179,64,147,24,64,65,98,59,83,185,64,144,160,68,65,209,87,192,64,149,212,72,65,12,31,200,64,227,165,76,65,98,156,138,217,64,202,50,85,65,90,216,238,64,112,206,91,65, 66,9,3,65,154,153,95,65,98,81,32,5,65,128,72,96,65,245,62,7,65,118,224,96,65,168,99,9,65,158,94,97,65,98,254,101,34,65,82,39,103,65,108,9,62,65,48,187,95,65,190,193,80,65,2,43,78,65,98,158,94,81,65,49,153,77,65,31,133,140,65,119,243,5,65,31,133,140,65, 119,243,5,65,98,32,210,155,65,255,178,206,64,32,210,155,65,137,65,86,64,31,133,140,65,83,179,183,63,108,31,133,140,65,83,179,183,63,99,109,119,21,248,64,203,16,112,65,98,15,156,242,64,163,35,111,65,19,68,237,64,43,24,110,65,95,7,232,64,65,241,108,65, 98,95,7,232,64,65,241,108,65,85,222,205,64,188,5,122,65,85,222,205,64,95,7,122,65,98,15,151,193,64,129,21,128,65,221,152,176,64,28,235,129,65,104,63,159,64,52,17,130,65,98,194,81,140,64,42,58,130,65,115,157,114,64,217,95,128,65,117,229,87,64,188,5,122, 65,98,226,233,33,64,194,134,108,65,226,233,33,64,46,144,86,65,117,229,87,64,249,15,73,65,108,72,196,255,64,62,208,255,64,98,75,106,1,65,216,182,252,64,153,71,3,65,222,89,250,64,155,56,5,65,69,100,248,64,98,252,24,14,65,22,106,239,64,246,238,24,65,66, 149,238,64,243,31,34,65,212,43,246,64,98,188,150,43,65,30,249,253,64,19,97,51,65,100,105,7,65,163,35,54,65,63,82,17,65,98,199,41,54,65,140,103,17,65,236,47,54,65,206,124,17,65,17,54,54,65,27,146,17,65,98,17,54,54,65,27,146,17,65,25,4,87,65,81,136,225, 64,154,8,87,65,57,127,225,64,98,155,230,87,65,89,192,223,64,9,138,77,65,136,133,201,64,74,123,76,65,123,107,199,64,98,50,85,72,65,190,48,191,64,233,183,67,65,34,224,183,64,214,197,62,65,43,164,177,64,98,177,225,52,65,48,47,165,64,190,159,41,65,160,253, 156,64,130,255,29,65,128,72,154,64,98,78,156,6,65,48,216,148,64,64,24,220,64,230,174,165,64,114,225,186,64,141,40,199,64,108,250,179,183,63,27,13,42,65,98,0,112,244,190,30,167,72,65,0,112,244,190,59,112,122,65,250,179,183,63,31,133,140,65,98,220,186, 21,64,242,193,147,65,224,219,102,64,201,246,151,65,180,89,156,64,0,0,152,65,98,189,169,197,64,3,9,152,65,214,173,238,64,137,210,147,65,151,243,5,65,31,133,140,65,108,187,39,43,65,208,213,115,65,98,118,224,37,65,82,184,116,65,170,130,32,65,212,43,117, 65,180,19,27,65,212,43,117,65,98,7,124,16,65,212,43,117,65,93,10,6,65,188,116,115,65,119,21,248,64,203,16,112,65,108,119,21,248,64,203,16,112,65,99,101,0,0];
		icons.linkIcon = Content.createPath();
		icons.linkIcon.loadFromData(svgData);
}