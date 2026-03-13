import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { FadeInUp, FadeInDown, FadeOut, Layout } from 'react-native-reanimated';
import { Anchor, Sparkles, Users, ChevronRight, ChevronLeft } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: "O futuro é uma ilusão.",
    text: "Sua ansiedade vive no 'E se?'. O NOW te traz de volta para o 'Estou aqui'.",
    icon: <Anchor size={80} color="#4A7A8C" strokeWidth={1.5} />,
    bg: '#E8F4F8'
  },
  {
    title: "Respire com o NOW.",
    text: "Sinta o peso do seu corpo na cadeira. Você está segura. Um passo por vez na Federal.",
    icon: <Sparkles size={80} color="#5DA7B1" strokeWidth={1.5} />,
    bg: '#F0F7F4'
  },
  {
    title: "Sua voz importa.",
    text: "Conecte-se com quem te entende, sem máscaras e sem medo do julgamento.",
    icon: <Users size={80} color="#4A7A8C" strokeWidth={1.5} />,
    bg: '#FAF3F3'
  }
];

export default function OnboardingScreen({ navigation }) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        loop={false}
        width={width}
        height={height}
        data={slides}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View style={[styles.slide, { backgroundColor: item.bg }]}>
            
            {/* Ícone Animado que "Cai" do topo */}
            <Animated.View 
              key={`icon-${currentIndex}`}
              entering={FadeInUp.delay(200).springify()} 
              style={styles.iconContainer}
            >
              {item.icon}
            </Animated.View>

            {/* Texto Animado que "Sobe" do fundo */}
            <Animated.View 
              key={`text-${currentIndex}`}
              entering={FadeInDown.delay(400).springify()} 
              style={styles.textContainer}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.text}</Text>
            </Animated.View>
          </View>
        )}
      />

      {/* Controles de Navegação */}
      <View style={styles.footer}>
        <View style={styles.navRow}>
          
          {/* Botão Voltar */}
          <TouchableOpacity 
            style={[styles.navBtn, currentIndex === 0 && { opacity: 0 }]} 
            disabled={currentIndex === 0}
            onPress={() => carouselRef.current?.prev()}
          >
            <ChevronLeft color="#4A7A8C" size={32} />
          </TouchableOpacity>

          {/* Indicadores (Pontinhos) */}
          <View style={styles.dotRow}>
            {slides.map((_, i) => (
              <Animated.View 
                layout={Layout.springify()}
                key={i} 
                style={[styles.dot, currentIndex === i && styles.activeDot]} 
              />
            ))}
          </View>

          {/* Botão Próximo / Começar */}
          <TouchableOpacity 
            style={styles.navBtn} 
            onPress={() => {
              if (currentIndex === slides.length - 1) {
                navigation.replace('Main');
              } else {
                carouselRef.current?.next();
              }
            }}
          >
            {currentIndex === slides.length - 1 ? (
              <Animated.Text entering={FadeInUp} style={styles.startText}>Começar</Animated.Text>
            ) : (
              <ChevronRight color="#4A7A8C" size={32} />
            )}
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  slide: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  iconContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 8,
    marginBottom: 60
  },
  textContainer: { alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: 20 },
  description: { fontSize: 18, color: '#666', textAlign: 'center', lineHeight: 28, paddingHorizontal: 10 },
  footer: { position: 'absolute', bottom: 60, width: '100%', paddingHorizontal: 30 },
  navRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dotRow: { flexDirection: 'row', gap: 10 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#D1D1D1' },
  activeDot: { width: 30, backgroundColor: '#4A7A8C' },
  navBtn: { width: 80, height: 50, justifyContent: 'center', alignItems: 'center' },
  startText: { color: '#4A7A8C', fontWeight: 'bold', fontSize: 20 }
});