# Automatically generated makefile, created by the Projucer
# Don't edit this file! Your changes will be overwritten when you re-save the Projucer project!

# build with "V=1" for verbose builds
ifeq ($(V), 1)
V_AT =
else
V_AT = @
endif

# (this disables dependency generation if multiple architectures are set)
DEPFLAGS := $(if $(word 2, $(TARGET_ARCH)), , -MMD)

ifndef STRIP
  STRIP=strip
endif

ifndef AR
  AR=ar
endif

ifndef CONFIG
  CONFIG=Debug
endif

JUCE_ARCH_LABEL := $(shell uname -m)

ifeq ($(CONFIG),Debug)
  JUCE_BINDIR := build
  JUCE_LIBDIR := build
  JUCE_OBJDIR := build/intermediate/Debug
  JUCE_OUTDIR := build

  ifeq ($(TARGET_ARCH),)
    TARGET_ARCH := 
  endif

  JUCE_CPPFLAGS := $(DEPFLAGS) "-DLINUX=1" "-DDEBUG=1" "-D_DEBUG=1" "-DHISE_NUM_PLUGIN_CHANNELS=2" "-DJUCER_LINUX_MAKE_6D53C8B4=1" "-DJUCE_APP_VERSION=1.0.0" "-DJUCE_APP_VERSION_HEX=0x10000" $(shell pkg-config --cflags alsa freetype2 x11 xinerama xext x11 xinerama xext) -pthread -I/home/iso/Applications/HISE/JUCE/modules/juce_audio_processors/format_types/VST3_SDK -I/home/iso/Applications/HISE/tools/SDK/VST3\ SDK -I../../JuceLibraryCode -I/home/iso/Applications/HISE -I$(HOME)/modules -I/home/iso/Applications/HISE/JUCE/modules -I/home/iso/Applications/HISE/stk_wrapper/stk/include -I/opt/intel/ipp/include $(CPPFLAGS)

  JUCE_CPPFLAGS_VST3 :=  "-DJucePlugin_Build_VST=0" "-DJucePlugin_Build_VST3=1" "-DJucePlugin_Build_AU=0" "-DJucePlugin_Build_AUv3=0" "-DJucePlugin_Build_RTAS=0" "-DJucePlugin_Build_AAX=0" "-DJucePlugin_Build_Standalone=0" "-DJucePlugin_Build_Unity=0"
  JUCE_CFLAGS_VST3 := -fPIC -fvisibility=hidden
  JUCE_LDFLAGS_VST3 := -shared -Wl,--no-undefined
  JUCE_VST3DIR := test\ Debug.vst3
  VST3_PLATFORM_ARCH := $(shell $(CXX) make_helpers/arch_detection.cpp 2>&1 | tr '\n' ' ' | sed "s/.*JUCE_ARCH \([a-zA-Z0-9_-]*\).*/\1/")
  JUCE_VST3SUBDIR := Contents/$(VST3_PLATFORM_ARCH)-linux
  JUCE_TARGET_VST3 := $(JUCE_VST3DIR)/$(JUCE_VST3SUBDIR)/test\ Debug.so
  JUCE_VST3DESTDIR := $(HOME)/.vst3
  JUCE_COPYCMD_VST3 := $(JUCE_OUTDIR)/$(JUCE_VST3DIR) $(JUCE_VST3DESTDIR)

  JUCE_CPPFLAGS_SHARED_CODE :=  "-DJucePlugin_Build_VST=0" "-DJucePlugin_Build_VST3=1" "-DJucePlugin_Build_AU=0" "-DJucePlugin_Build_AUv3=0" "-DJucePlugin_Build_RTAS=0" "-DJucePlugin_Build_AAX=0" "-DJucePlugin_Build_Standalone=0" "-DJucePlugin_Build_Unity=0" "-DJUCE_SHARED_CODE=1"
  JUCE_TARGET_SHARED_CODE := test\ Debug.a

  JUCE_CFLAGS += $(JUCE_CPPFLAGS) $(TARGET_ARCH) -fPIC -g -ggdb -O0 $(CFLAGS)
  JUCE_CXXFLAGS += $(JUCE_CFLAGS) -std=c++14 $(CXXFLAGS)
  JUCE_LDFLAGS += $(TARGET_ARCH) -L$(JUCE_BINDIR) -L$(JUCE_LIBDIR) -L/opt/intel/ipp/lib $(shell pkg-config --libs alsa freetype2 x11 xinerama xext x11 xinerama xext) -fvisibility=hidden /opt/intel/ipp/lib/intel64/libippi.a  /opt/intel/ipp/lib/intel64/libipps.a /opt/intel/ipp/lib/intel64/libippvm.a /opt/intel/ipp/lib/intel64/libippcore.a -lrt -ldl -lpthread -lGL $(LDFLAGS)

  CLEANCMD = rm -rf $(JUCE_OUTDIR)/$(TARGET) $(JUCE_OBJDIR)
endif

ifeq ($(CONFIG),Release)
  JUCE_BINDIR := build
  JUCE_LIBDIR := build
  JUCE_OBJDIR := build/intermediate/Release
  JUCE_OUTDIR := /home/iso/.vst3

  ifeq ($(TARGET_ARCH),)
    TARGET_ARCH := 
  endif

  JUCE_CPPFLAGS := $(DEPFLAGS) "-DLINUX=1" "-DNDEBUG=1" "-DHISE_NUM_PLUGIN_CHANNELS=2" "-DJUCER_LINUX_MAKE_6D53C8B4=1" "-DJUCE_APP_VERSION=1.0.0" "-DJUCE_APP_VERSION_HEX=0x10000" $(shell pkg-config --cflags alsa freetype2 x11 xinerama xext x11 xinerama xext) -pthread -I/home/iso/Applications/HISE/JUCE/modules/juce_audio_processors/format_types/VST3_SDK -I/home/iso/Applications/HISE/tools/SDK/VST3\ SDK -I../../JuceLibraryCode -I/home/iso/Applications/HISE -I$(HOME)/modules -I/home/iso/Applications/HISE/JUCE/modules -I/home/iso/Applications/HISE/stk_wrapper/stk/include -I/opt/intel/ipp/include $(CPPFLAGS)

  JUCE_CPPFLAGS_VST3 :=  "-DJucePlugin_Build_VST=0" "-DJucePlugin_Build_VST3=1" "-DJucePlugin_Build_AU=0" "-DJucePlugin_Build_AUv3=0" "-DJucePlugin_Build_RTAS=0" "-DJucePlugin_Build_AAX=0" "-DJucePlugin_Build_Standalone=0" "-DJucePlugin_Build_Unity=0"
  JUCE_CFLAGS_VST3 := -fPIC -fvisibility=hidden
  JUCE_LDFLAGS_VST3 := -shared -Wl,--no-undefined
  JUCE_VST3DIR := test.vst3
  VST3_PLATFORM_ARCH := $(shell $(CXX) make_helpers/arch_detection.cpp 2>&1 | tr '\n' ' ' | sed "s/.*JUCE_ARCH \([a-zA-Z0-9_-]*\).*/\1/")
  JUCE_VST3SUBDIR := Contents/$(VST3_PLATFORM_ARCH)-linux
  JUCE_TARGET_VST3 := $(JUCE_VST3DIR)/$(JUCE_VST3SUBDIR)/test.so
  JUCE_VST3DESTDIR := $(HOME)/.vst3
  JUCE_COPYCMD_VST3 := $(JUCE_OUTDIR)/$(JUCE_VST3DIR) $(JUCE_VST3DESTDIR)

  JUCE_CPPFLAGS_SHARED_CODE :=  "-DJucePlugin_Build_VST=0" "-DJucePlugin_Build_VST3=1" "-DJucePlugin_Build_AU=0" "-DJucePlugin_Build_AUv3=0" "-DJucePlugin_Build_RTAS=0" "-DJucePlugin_Build_AAX=0" "-DJucePlugin_Build_Standalone=0" "-DJucePlugin_Build_Unity=0" "-DJUCE_SHARED_CODE=1"
  JUCE_TARGET_SHARED_CODE := test.a

  JUCE_CFLAGS += $(JUCE_CPPFLAGS) $(TARGET_ARCH) -fPIC -O3 -flto $(CFLAGS)
  JUCE_CXXFLAGS += $(JUCE_CFLAGS) -std=c++14 $(CXXFLAGS)
  JUCE_LDFLAGS += $(TARGET_ARCH) -L$(JUCE_BINDIR) -L$(JUCE_LIBDIR) -L/opt/intel/ipp/lib $(shell pkg-config --libs alsa freetype2 x11 xinerama xext x11 xinerama xext) -fvisibility=hidden -flto /opt/intel/ipp/lib/intel64/libippi.a  /opt/intel/ipp/lib/intel64/libipps.a /opt/intel/ipp/lib/intel64/libippvm.a /opt/intel/ipp/lib/intel64/libippcore.a -lrt -ldl -lpthread -lGL $(LDFLAGS)

  CLEANCMD = rm -rf $(JUCE_OUTDIR)/$(TARGET) $(JUCE_OBJDIR)
endif

OBJECTS_ALL := \

OBJECTS_VST3 := \
  $(JUCE_OBJDIR)/include_juce_audio_plugin_client_VST3_dd633589.o \

OBJECTS_SHARED_CODE := \
  $(JUCE_OBJDIR)/CopyProtection_c183dcb7.o \
  $(JUCE_OBJDIR)/Plugin_124bbd3c.o \
  $(JUCE_OBJDIR)/PresetData_a83b9832.o \
  $(JUCE_OBJDIR)/BinaryData_ce4232d4.o \
  $(JUCE_OBJDIR)/include_hi_components_a6aebb3e.o \
  $(JUCE_OBJDIR)/include_hi_core_ff8d8d87.o \
  $(JUCE_OBJDIR)/include_hi_dsp_8e162ae3.o \
  $(JUCE_OBJDIR)/include_hi_dsp_library_cd0fca5f.o \
  $(JUCE_OBJDIR)/include_hi_frontend_381e68fa.o \
  $(JUCE_OBJDIR)/include_hi_lac_15d99830.o \
  $(JUCE_OBJDIR)/include_hi_modules_01_26747061.o \
  $(JUCE_OBJDIR)/include_hi_modules_02_268287e2.o \
  $(JUCE_OBJDIR)/include_hi_modules_03_26909f63.o \
  $(JUCE_OBJDIR)/include_hi_modules_04_269eb6e4.o \
  $(JUCE_OBJDIR)/include_hi_modules_05_26acce65.o \
  $(JUCE_OBJDIR)/include_hi_modules_06_26bae5e6.o \
  $(JUCE_OBJDIR)/include_hi_sampler_50722b2a.o \
  $(JUCE_OBJDIR)/include_hi_scripting_01_6ad431f1.o \
  $(JUCE_OBJDIR)/include_hi_scripting_02_6ae24972.o \
  $(JUCE_OBJDIR)/include_hi_scripting_03_6af060f3.o \
  $(JUCE_OBJDIR)/include_hi_snex_3396deb6.o \
  $(JUCE_OBJDIR)/include_hi_snex_01_475d05b4.o \
  $(JUCE_OBJDIR)/include_hi_snex_02_476b1d35.o \
  $(JUCE_OBJDIR)/include_hi_snex_03_477934b6.o \
  $(JUCE_OBJDIR)/include_hi_snex_04_47874c37.o \
  $(JUCE_OBJDIR)/include_hi_snex_05_479563b8.o \
  $(JUCE_OBJDIR)/include_hi_snex_06_47a37b39.o \
  $(JUCE_OBJDIR)/include_hi_snex_07_47b192ba.o \
  $(JUCE_OBJDIR)/include_hi_snex_08_47bfaa3b.o \
  $(JUCE_OBJDIR)/include_hi_snex_09_47cdc1bc.o \
  $(JUCE_OBJDIR)/include_hi_snex_10_4903c6d2.o \
  $(JUCE_OBJDIR)/include_hi_snex_11_4911de53.o \
  $(JUCE_OBJDIR)/include_hi_snex_12_491ff5d4.o \
  $(JUCE_OBJDIR)/include_hi_snex_13_492e0d55.o \
  $(JUCE_OBJDIR)/include_hi_snex_14_493c24d6.o \
  $(JUCE_OBJDIR)/include_hi_snex_15_494a3c57.o \
  $(JUCE_OBJDIR)/include_hi_snex_16_495853d8.o \
  $(JUCE_OBJDIR)/include_hi_snex_17_49666b59.o \
  $(JUCE_OBJDIR)/include_hi_snex_18_497482da.o \
  $(JUCE_OBJDIR)/include_hi_snex_19_49829a5b.o \
  $(JUCE_OBJDIR)/include_hi_snex_20_4ab89f71.o \
  $(JUCE_OBJDIR)/include_hi_snex_21_4ac6b6f2.o \
  $(JUCE_OBJDIR)/include_hi_snex_22_4ad4ce73.o \
  $(JUCE_OBJDIR)/include_hi_snex_23_4ae2e5f4.o \
  $(JUCE_OBJDIR)/include_hi_snex_24_4af0fd75.o \
  $(JUCE_OBJDIR)/include_hi_snex_25_4aff14f6.o \
  $(JUCE_OBJDIR)/include_hi_snex_26_4b0d2c77.o \
  $(JUCE_OBJDIR)/include_hi_snex_27_4b1b43f8.o \
  $(JUCE_OBJDIR)/include_hi_snex_28_4b295b79.o \
  $(JUCE_OBJDIR)/include_hi_snex_29_4b3772fa.o \
  $(JUCE_OBJDIR)/include_hi_snex_30_4c6d7810.o \
  $(JUCE_OBJDIR)/include_hi_snex_31_4c7b8f91.o \
  $(JUCE_OBJDIR)/include_hi_snex_32_4c89a712.o \
  $(JUCE_OBJDIR)/include_hi_snex_33_4c97be93.o \
  $(JUCE_OBJDIR)/include_hi_snex_34_4ca5d614.o \
  $(JUCE_OBJDIR)/include_hi_snex_35_4cb3ed95.o \
  $(JUCE_OBJDIR)/include_hi_snex_36_4cc20516.o \
  $(JUCE_OBJDIR)/include_hi_snex_37_4cd01c97.o \
  $(JUCE_OBJDIR)/include_hi_snex_38_4cde3418.o \
  $(JUCE_OBJDIR)/include_hi_snex_39_4cec4b99.o \
  $(JUCE_OBJDIR)/include_hi_snex_40_4e2250af.o \
  $(JUCE_OBJDIR)/include_hi_snex_41_4e306830.o \
  $(JUCE_OBJDIR)/include_hi_streaming_6963df44.o \
  $(JUCE_OBJDIR)/include_hi_tools_3ba2cabd.o \
  $(JUCE_OBJDIR)/include_hi_zstd_1_81a60803.o \
  $(JUCE_OBJDIR)/include_hi_zstd_2_81b41f84.o \
  $(JUCE_OBJDIR)/include_hi_zstd_3_81c23705.o \
  $(JUCE_OBJDIR)/include_juce_audio_basics_8a4e984a.o \
  $(JUCE_OBJDIR)/include_juce_audio_devices_63111d02.o \
  $(JUCE_OBJDIR)/include_juce_audio_formats_15f82001.o \
  $(JUCE_OBJDIR)/include_juce_audio_plugin_client_utils_e32edaee.o \
  $(JUCE_OBJDIR)/include_juce_audio_processors_10c03666.o \
  $(JUCE_OBJDIR)/include_juce_audio_utils_9f9fb2d6.o \
  $(JUCE_OBJDIR)/include_juce_core_f26d17db.o \
  $(JUCE_OBJDIR)/include_juce_cryptography_8cb807a8.o \
  $(JUCE_OBJDIR)/include_juce_data_structures_7471b1e3.o \
  $(JUCE_OBJDIR)/include_juce_dsp_aeb2060f.o \
  $(JUCE_OBJDIR)/include_juce_events_fd7d695.o \
  $(JUCE_OBJDIR)/include_juce_graphics_f817e147.o \
  $(JUCE_OBJDIR)/include_juce_gui_basics_e3f79785.o \
  $(JUCE_OBJDIR)/include_juce_gui_extra_6dee1c1a.o \
  $(JUCE_OBJDIR)/include_juce_opengl_a8a032b.o \
  $(JUCE_OBJDIR)/include_juce_product_unlocking_8278fcdc.o \
  $(JUCE_OBJDIR)/include_stk_wrapper_97001de8.o \

.PHONY: clean all strip VST3

all : VST3

VST3 : $(JUCE_OUTDIR)/$(JUCE_TARGET_VST3)


$(JUCE_OUTDIR)/$(JUCE_TARGET_VST3) : $(OBJECTS_VST3) $(RESOURCES) $(JUCE_OUTDIR)/$(JUCE_TARGET_SHARED_CODE)
	@command -v pkg-config >/dev/null 2>&1 || { echo >&2 "pkg-config not installed. Please, install it."; exit 1; }
	@pkg-config --print-errors alsa freetype2 x11 xinerama xext x11 xinerama xext
	@echo Linking "test - VST3"
	-$(V_AT)mkdir -p $(JUCE_BINDIR)
	-$(V_AT)mkdir -p $(JUCE_LIBDIR)
	-$(V_AT)mkdir -p $(JUCE_OUTDIR)
	-$(V_AT)mkdir -p $(JUCE_OUTDIR)/$(JUCE_VST3DIR)/$(JUCE_VST3SUBDIR)
	$(V_AT)$(CXX) -o $(JUCE_OUTDIR)/$(JUCE_TARGET_VST3) $(OBJECTS_VST3) $(JUCE_OUTDIR)/$(JUCE_TARGET_SHARED_CODE) $(JUCE_LDFLAGS) $(JUCE_LDFLAGS_VST3) $(RESOURCES) $(TARGET_ARCH)
	-$(V_AT)mkdir -p $(JUCE_VST3DESTDIR)
	-$(V_AT)cp -R $(JUCE_COPYCMD_VST3)

$(JUCE_OUTDIR)/$(JUCE_TARGET_SHARED_CODE) : $(OBJECTS_SHARED_CODE) $(RESOURCES)
	@command -v pkg-config >/dev/null 2>&1 || { echo >&2 "pkg-config not installed. Please, install it."; exit 1; }
	@pkg-config --print-errors alsa freetype2 x11 xinerama xext x11 xinerama xext
	@echo Linking "test - Shared Code"
	-$(V_AT)mkdir -p $(JUCE_BINDIR)
	-$(V_AT)mkdir -p $(JUCE_LIBDIR)
	-$(V_AT)mkdir -p $(JUCE_OUTDIR)
	$(V_AT)$(AR) -rcs $(JUCE_OUTDIR)/$(JUCE_TARGET_SHARED_CODE) $(OBJECTS_SHARED_CODE)

$(JUCE_OBJDIR)/include_juce_audio_plugin_client_VST3_dd633589.o: ../../JuceLibraryCode/include_juce_audio_plugin_client_VST3.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_audio_plugin_client_VST3.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_VST3) $(JUCE_CFLAGS_VST3) -o "$@" -c "$<"

$(JUCE_OBJDIR)/CopyProtection_c183dcb7.o: ../../Source/CopyProtection.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling CopyProtection.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/Plugin_124bbd3c.o: ../../Source/Plugin.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling Plugin.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/PresetData_a83b9832.o: ../../Source/PresetData.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling PresetData.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/BinaryData_ce4232d4.o: ../../JuceLibraryCode/BinaryData.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling BinaryData.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_components_a6aebb3e.o: ../../JuceLibraryCode/include_hi_components.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_components.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_core_ff8d8d87.o: ../../JuceLibraryCode/include_hi_core.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_core.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_dsp_8e162ae3.o: ../../JuceLibraryCode/include_hi_dsp.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_dsp.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_dsp_library_cd0fca5f.o: ../../JuceLibraryCode/include_hi_dsp_library.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_dsp_library.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_frontend_381e68fa.o: ../../JuceLibraryCode/include_hi_frontend.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_frontend.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_lac_15d99830.o: ../../JuceLibraryCode/include_hi_lac.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_lac.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_modules_01_26747061.o: ../../JuceLibraryCode/include_hi_modules_01.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_modules_01.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_modules_02_268287e2.o: ../../JuceLibraryCode/include_hi_modules_02.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_modules_02.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_modules_03_26909f63.o: ../../JuceLibraryCode/include_hi_modules_03.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_modules_03.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_modules_04_269eb6e4.o: ../../JuceLibraryCode/include_hi_modules_04.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_modules_04.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_modules_05_26acce65.o: ../../JuceLibraryCode/include_hi_modules_05.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_modules_05.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_modules_06_26bae5e6.o: ../../JuceLibraryCode/include_hi_modules_06.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_modules_06.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_sampler_50722b2a.o: ../../JuceLibraryCode/include_hi_sampler.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_sampler.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_scripting_01_6ad431f1.o: ../../JuceLibraryCode/include_hi_scripting_01.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_scripting_01.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_scripting_02_6ae24972.o: ../../JuceLibraryCode/include_hi_scripting_02.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_scripting_02.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_scripting_03_6af060f3.o: ../../JuceLibraryCode/include_hi_scripting_03.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_scripting_03.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_3396deb6.o: ../../JuceLibraryCode/include_hi_snex.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_01_475d05b4.o: ../../JuceLibraryCode/include_hi_snex_01.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_01.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_02_476b1d35.o: ../../JuceLibraryCode/include_hi_snex_02.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_02.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_03_477934b6.o: ../../JuceLibraryCode/include_hi_snex_03.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_03.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_04_47874c37.o: ../../JuceLibraryCode/include_hi_snex_04.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_04.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_05_479563b8.o: ../../JuceLibraryCode/include_hi_snex_05.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_05.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_06_47a37b39.o: ../../JuceLibraryCode/include_hi_snex_06.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_06.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_07_47b192ba.o: ../../JuceLibraryCode/include_hi_snex_07.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_07.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_08_47bfaa3b.o: ../../JuceLibraryCode/include_hi_snex_08.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_08.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_09_47cdc1bc.o: ../../JuceLibraryCode/include_hi_snex_09.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_09.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_10_4903c6d2.o: ../../JuceLibraryCode/include_hi_snex_10.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_10.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_11_4911de53.o: ../../JuceLibraryCode/include_hi_snex_11.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_11.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_12_491ff5d4.o: ../../JuceLibraryCode/include_hi_snex_12.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_12.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_13_492e0d55.o: ../../JuceLibraryCode/include_hi_snex_13.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_13.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_14_493c24d6.o: ../../JuceLibraryCode/include_hi_snex_14.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_14.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_15_494a3c57.o: ../../JuceLibraryCode/include_hi_snex_15.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_15.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_16_495853d8.o: ../../JuceLibraryCode/include_hi_snex_16.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_16.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_17_49666b59.o: ../../JuceLibraryCode/include_hi_snex_17.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_17.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_18_497482da.o: ../../JuceLibraryCode/include_hi_snex_18.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_18.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_19_49829a5b.o: ../../JuceLibraryCode/include_hi_snex_19.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_19.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_20_4ab89f71.o: ../../JuceLibraryCode/include_hi_snex_20.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_20.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_21_4ac6b6f2.o: ../../JuceLibraryCode/include_hi_snex_21.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_21.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_22_4ad4ce73.o: ../../JuceLibraryCode/include_hi_snex_22.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_22.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_23_4ae2e5f4.o: ../../JuceLibraryCode/include_hi_snex_23.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_23.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_24_4af0fd75.o: ../../JuceLibraryCode/include_hi_snex_24.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_24.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_25_4aff14f6.o: ../../JuceLibraryCode/include_hi_snex_25.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_25.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_26_4b0d2c77.o: ../../JuceLibraryCode/include_hi_snex_26.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_26.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_27_4b1b43f8.o: ../../JuceLibraryCode/include_hi_snex_27.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_27.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_28_4b295b79.o: ../../JuceLibraryCode/include_hi_snex_28.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_28.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_29_4b3772fa.o: ../../JuceLibraryCode/include_hi_snex_29.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_29.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_30_4c6d7810.o: ../../JuceLibraryCode/include_hi_snex_30.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_30.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_31_4c7b8f91.o: ../../JuceLibraryCode/include_hi_snex_31.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_31.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_32_4c89a712.o: ../../JuceLibraryCode/include_hi_snex_32.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_32.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_33_4c97be93.o: ../../JuceLibraryCode/include_hi_snex_33.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_33.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_34_4ca5d614.o: ../../JuceLibraryCode/include_hi_snex_34.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_34.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_35_4cb3ed95.o: ../../JuceLibraryCode/include_hi_snex_35.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_35.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_36_4cc20516.o: ../../JuceLibraryCode/include_hi_snex_36.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_36.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_37_4cd01c97.o: ../../JuceLibraryCode/include_hi_snex_37.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_37.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_38_4cde3418.o: ../../JuceLibraryCode/include_hi_snex_38.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_38.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_39_4cec4b99.o: ../../JuceLibraryCode/include_hi_snex_39.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_39.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_40_4e2250af.o: ../../JuceLibraryCode/include_hi_snex_40.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_40.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_snex_41_4e306830.o: ../../JuceLibraryCode/include_hi_snex_41.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_snex_41.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_streaming_6963df44.o: ../../JuceLibraryCode/include_hi_streaming.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_streaming.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_tools_3ba2cabd.o: ../../JuceLibraryCode/include_hi_tools.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_tools.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_zstd_1_81a60803.o: ../../JuceLibraryCode/include_hi_zstd_1.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_zstd_1.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_zstd_2_81b41f84.o: ../../JuceLibraryCode/include_hi_zstd_2.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_zstd_2.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_hi_zstd_3_81c23705.o: ../../JuceLibraryCode/include_hi_zstd_3.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_hi_zstd_3.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_audio_basics_8a4e984a.o: ../../JuceLibraryCode/include_juce_audio_basics.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_audio_basics.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_audio_devices_63111d02.o: ../../JuceLibraryCode/include_juce_audio_devices.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_audio_devices.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_audio_formats_15f82001.o: ../../JuceLibraryCode/include_juce_audio_formats.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_audio_formats.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_audio_plugin_client_utils_e32edaee.o: ../../JuceLibraryCode/include_juce_audio_plugin_client_utils.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_audio_plugin_client_utils.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_audio_processors_10c03666.o: ../../JuceLibraryCode/include_juce_audio_processors.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_audio_processors.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_audio_utils_9f9fb2d6.o: ../../JuceLibraryCode/include_juce_audio_utils.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_audio_utils.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_core_f26d17db.o: ../../JuceLibraryCode/include_juce_core.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_core.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_cryptography_8cb807a8.o: ../../JuceLibraryCode/include_juce_cryptography.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_cryptography.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_data_structures_7471b1e3.o: ../../JuceLibraryCode/include_juce_data_structures.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_data_structures.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_dsp_aeb2060f.o: ../../JuceLibraryCode/include_juce_dsp.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_dsp.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_events_fd7d695.o: ../../JuceLibraryCode/include_juce_events.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_events.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_graphics_f817e147.o: ../../JuceLibraryCode/include_juce_graphics.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_graphics.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_gui_basics_e3f79785.o: ../../JuceLibraryCode/include_juce_gui_basics.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_gui_basics.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_gui_extra_6dee1c1a.o: ../../JuceLibraryCode/include_juce_gui_extra.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_gui_extra.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_opengl_a8a032b.o: ../../JuceLibraryCode/include_juce_opengl.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_opengl.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_juce_product_unlocking_8278fcdc.o: ../../JuceLibraryCode/include_juce_product_unlocking.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_juce_product_unlocking.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

$(JUCE_OBJDIR)/include_stk_wrapper_97001de8.o: ../../JuceLibraryCode/include_stk_wrapper.cpp
	-$(V_AT)mkdir -p $(JUCE_OBJDIR)
	@echo "Compiling include_stk_wrapper.cpp"
	$(V_AT)$(CXX) $(JUCE_CXXFLAGS) $(JUCE_CPPFLAGS_SHARED_CODE) $(JUCE_CFLAGS_SHARED_CODE) -o "$@" -c "$<"

clean:
	@echo Cleaning test
	$(V_AT)$(CLEANCMD)

strip:
	@echo Stripping test
	-$(V_AT)$(STRIP) --strip-unneeded $(JUCE_OUTDIR)/$(TARGET)

-include $(OBJECTS_VST3:%.o=%.d)
-include $(OBJECTS_SHARED_CODE:%.o=%.d)
